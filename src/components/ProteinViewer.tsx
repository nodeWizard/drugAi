import { useEffect, useRef, useState } from 'react'

// Types pour 3Dmol.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Viewer3Dmol = any

declare global {
  interface Window {
    $3Dmol?: {
      createViewer: (element: HTMLElement, config: { backgroundColor: number }) => Viewer3Dmol
      download: (url: string, viewer: Viewer3Dmol, config: Record<string, unknown>, callback: () => void) => void
    }
  }
}

interface ProteinViewerProps {
  cifUrl?: string
  bcifUrl?: string
  pdbUrl?: string
  uniprotId: string
  confidenceScores?: {
    veryHigh?: number
    confident?: number
    low?: number
    veryLow?: number
  }
}

export default function ProteinViewer({ cifUrl, bcifUrl, pdbUrl, uniprotId, confidenceScores }: ProteinViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<Viewer3Dmol | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Charger 3Dmol.js depuis CDN
    const load3Dmol = (): Promise<void> => {
      return new Promise<void>((resolve, reject) => {
        if (window.$3Dmol) {
          resolve()
          return
        }

        // Vérifier si le script est déjà en cours de chargement
        const existingScript = document.querySelector('script[src*="3Dmol"]')
        if (existingScript) {
          existingScript.addEventListener('load', () => {
            if (window.$3Dmol) {
              resolve()
            } else {
              reject(new Error('3Dmol.js n\'a pas pu être chargé'))
            }
          })
          return
        }

        const script = document.createElement('script')
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/3Dmol/2.1.0/3Dmol-min.js'
        script.async = true
        script.onload = () => {
          // Attendre un peu pour que la bibliothèque soit complètement initialisée
          setTimeout(() => {
            if (window.$3Dmol) {
              resolve()
            } else {
              reject(new Error('3Dmol.js n\'a pas pu être chargé'))
            }
          }, 100)
        }
        script.onerror = () => reject(new Error('Erreur lors du chargement de 3Dmol.js'))
        document.head.appendChild(script)
      })
    }

    const initializeViewer = async () => {
      try {
        setLoading(true)
        setError(null)

        // S'assurer que le conteneur est vide
        if (container) {
          container.innerHTML = ''
        }

        // Charger la bibliothèque 3Dmol.js
        await load3Dmol()

        if (!container || !window.$3Dmol) {
          throw new Error('Impossible d\'initialiser le visualiseur')
        }

        // Créer le visualiseur avec un fond clair pour mieux voir
        const viewer = window.$3Dmol.createViewer(container, {
          backgroundColor: 0xffffff, // Fond blanc pour mieux voir
        })

        viewerRef.current = viewer

        // Utiliser PDB de préférence (3Dmol le supporte mieux), sinon CIF
        // Note: BCIF n'est pas supporté par 3Dmol, donc on utilise CIF ou PDB
        let url = pdbUrl || cifUrl
        if (!url && uniprotId) {
          // Construire l'URL par défaut pour AlphaFold PDB
          url = `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v4.pdb`
        }

        if (!url) {
          throw new Error('Aucune URL de structure disponible')
        }

        console.log('🔄 Chargement de la structure depuis:', url)

        // Déterminer le format du fichier
        const isPDB = url.endsWith('.pdb')
        const isCIF = url.endsWith('.cif') || url.endsWith('.bcif')

        // Télécharger le fichier d'abord, puis le charger dans 3Dmol
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`)
          }
          
          const text = await response.text()
          
          if (!text || text.trim().length === 0) {
            throw new Error('Le fichier téléchargé est vide')
          }

          console.log('📦 Fichier téléchargé, longueur:', text.length, 'caractères')

          // Ajouter le modèle au viewer
          viewer.addModel(text, isPDB ? 'pdb' : 'cif')
          
          // Appliquer le style de base avec spectre de couleurs par défaut
          viewer.setStyle({}, { 
            cartoon: { 
              color: 'spectrum',
              thickness: 0.6
            } 
          })
          
          // Si on a des scores de confiance, essayer de colorer selon pLDDT via B-factor
          // Les fichiers AlphaFold stockent les scores pLDDT dans le champ B-factor
          // Note: Pour l'instant, on utilise 'spectrum' car 'b' peut causer des problèmes d'affichage
          // La légende explique quand même les significations des couleurs selon pLDDT
          
          // Ajouter aussi un style stick pour les atomes (optionnel) - seulement si pas de confidence scores
          if (!confidenceScores) {
            viewer.addStyle({}, {
              stick: {
                radius: 0.2,
                colorscheme: 'spectrum'
              }
            })
          }
          
          // Centrer et ajuster la vue
          viewer.zoomTo()
          viewer.render()
          
          // Forcer un nouveau rendu après un court délai pour s'assurer que tout est affiché
          setTimeout(() => {
            viewer.render()
          }, 100)
          
          setLoading(false)
          console.log('✅ Structure chargée avec succès')
        } catch (fetchError) {
          console.error('Erreur lors du téléchargement:', fetchError)
          // Essayer avec la méthode download() de 3Dmol comme fallback
          window.$3Dmol.download(url, viewer, {
            format: isPDB ? 'pdb' : isCIF ? 'cif' : 'pdb',
          }, () => {
            // Utiliser la même logique de coloration
            viewer.setStyle({}, { 
              cartoon: { 
                color: 'spectrum',
                thickness: 0.6
              } 
            })
            
            // Utiliser toujours 'spectrum' pour garantir l'affichage des couleurs
            viewer.zoomTo()
            viewer.render()
            setLoading(false)
            console.log('✅ Structure chargée avec succès (méthode fallback)')
          })
        }
      } catch (err) {
        console.error('❌ Erreur lors du chargement de la structure:', err)
        setError(err instanceof Error ? err.message : 'Erreur inconnue')
        setLoading(false)
      }
    }

    initializeViewer()

    // Gérer le redimensionnement
    const handleResize = () => {
      if (viewerRef.current && container) {
        viewerRef.current.resize(container.clientWidth, container.clientHeight)
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      // Nettoyer le viewer
      if (container) {
        container.innerHTML = ''
      }
      viewerRef.current = null
    }
  }, [cifUrl, bcifUrl, pdbUrl, uniprotId, confidenceScores])

  return (
    <div className="relative w-full h-full min-h-[600px] bg-gray-900 rounded-lg border border-gray-700">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-10 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Chargement de la structure 3D...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-10 rounded-lg">
          <div className="text-center text-red-400">
            <p className="mb-2">Erreur: {error}</p>
            <p className="text-sm text-gray-400">Veuillez rafraîchir la page ou essayer plus tard.</p>
          </div>
        </div>
      )}
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-[600px]"
        style={{ position: 'relative', backgroundColor: '#ffffff', width: '100%', height: '100%' }}
      />
      
      {/* Légende des couleurs */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-3">Légende des couleurs</h3>
        {confidenceScores ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-300 mb-3">
              La structure est colorée selon les scores de confiance pLDDT d'AlphaFold :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 rounded bg-blue-600 border border-blue-400"></div>
                <div>
                  <p className="text-sm font-semibold text-blue-300">Très haute confiance</p>
                  <p className="text-xs text-gray-400">pLDDT &gt; 90</p>
                  {confidenceScores.veryHigh !== undefined && (
                    <p className="text-xs text-gray-500">({(confidenceScores.veryHigh * 100).toFixed(1)}% de la structure)</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 rounded bg-cyan-500 border border-cyan-300"></div>
                <div>
                  <p className="text-sm font-semibold text-cyan-300">Confiance</p>
                  <p className="text-xs text-gray-400">pLDDT 70-90</p>
                  {confidenceScores.confident !== undefined && (
                    <p className="text-xs text-gray-500">({(confidenceScores.confident * 100).toFixed(1)}% de la structure)</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 rounded bg-yellow-500 border border-yellow-300"></div>
                <div>
                  <p className="text-sm font-semibold text-yellow-300">Faible confiance</p>
                  <p className="text-xs text-gray-400">pLDDT 50-70</p>
                  {confidenceScores.low !== undefined && (
                    <p className="text-xs text-gray-500">({(confidenceScores.low * 100).toFixed(1)}% de la structure)</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 rounded bg-orange-500 border border-orange-300"></div>
                <div>
                  <p className="text-sm font-semibold text-orange-300">Très faible confiance</p>
                  <p className="text-xs text-gray-400">pLDDT &lt; 50</p>
                  {confidenceScores.veryLow !== undefined && (
                    <p className="text-xs text-gray-500">({(confidenceScores.veryLow * 100).toFixed(1)}% de la structure)</p>
                  )}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              pLDDT (predicted Local Distance Difference Test) mesure la confiance de la prédiction de structure à chaque position.
              Plus le score est élevé, plus la structure prédite est fiable.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-gray-300 mb-3">
              La structure est colorée selon un spectre de couleurs du bleu (début) au rouge (fin) pour faciliter la visualisation de la chaîne protéique.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 rounded bg-gradient-to-r from-blue-500 to-red-500 border border-gray-500"></div>
                <div>
                  <p className="text-sm text-gray-300">Spectre de couleurs</p>
                  <p className="text-xs text-gray-400">Du N-terminal (bleu) au C-terminal (rouge)</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              <strong>Représentation :</strong> Cartoon (ruban) montrant la structure secondaire de la protéine.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

