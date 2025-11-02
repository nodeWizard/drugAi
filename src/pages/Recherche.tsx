import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchGeneProteins, getProteinFullName } from '../services/uniprot'
import { translateToFrench } from '../services/translation'
import { genes, genesStaticData, type GeneStaticData } from '../data/genesData'
import { searchGenes, type GeneSearchResult } from '../services/geneSearch'

interface GeneInfo {
  name: string
  description: string
  loading: boolean
  staticData?: GeneStaticData
}

function Recherche() {
  const [searchTerm, setSearchTerm] = useState('')
  const [genesInfo, setGenesInfo] = useState<Record<string, GeneInfo>>({})
  const [autocompleteResults, setAutocompleteResults] = useState<GeneSearchResult[]>([])
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const autocompleteRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const filteredGenes = genes.filter(
    gene => gene.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Recherche d'autocomplétion
  useEffect(() => {
    if (searchTerm.length >= 2) {
      // Annuler la recherche précédente
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }

      // Délai pour éviter trop de requêtes
      searchTimeoutRef.current = setTimeout(async () => {
        setIsSearching(true)
        const results = await searchGenes(searchTerm)
        setAutocompleteResults(results)
        setShowAutocomplete(results.length > 0)
        setIsSearching(false)
      }, 300)
    } else {
      setAutocompleteResults([])
      setShowAutocomplete(false)
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [searchTerm])

  // Fermer l'autocomplétion quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setShowAutocomplete(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleGeneSelect = (geneName: string) => {
    setSearchTerm('')
    setShowAutocomplete(false)
    navigate(`/gene/${geneName}`)
  }

  // Charger les descriptions des gènes depuis UniProt
  useEffect(() => {
    const loadGeneDescriptions = async () => {
      const infoPromises = genes.map(async (gene) => {
        // Initialiser avec les données statiques et loading
        const staticData = genesStaticData[gene]
        setGenesInfo(prev => ({
          ...prev,
          [gene]: { 
            name: gene, 
            description: staticData?.description || '', 
            loading: true,
            staticData
          }
        }))

        try {
          const geneInfo = await searchGeneProteins(gene)
          let description = geneInfo.primaryIsoform
            ? getProteinFullName(geneInfo.primaryIsoform)
            : staticData?.description || 'Description non disponible'

          // Traduire la description en français si elle n'est pas déjà en français
          if (description && description !== staticData?.description && description !== 'Description non disponible') {
            description = await translateToFrench(description)
          }

          setGenesInfo(prev => ({
            ...prev,
            [gene]: { 
              name: gene, 
              description: description || staticData?.description || 'Description non disponible', 
              loading: false,
              staticData
            }
          }))
        } catch (error) {
          console.error(`Erreur lors du chargement de ${gene}:`, error)
          setGenesInfo(prev => ({
            ...prev,
            [gene]: { 
              name: gene, 
              description: staticData?.description || 'Description non disponible', 
              loading: false,
              staticData
            }
          }))
        }
      })

      await Promise.all(infoPromises)
    }

    loadGeneDescriptions()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recherche de gènes
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explorez les gènes et découvrez leurs protéines, isoformes et structures 3D
          </p>

          {/* Search Bar avec autocomplétion */}
          <div className="mb-8" ref={autocompleteRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un gène (ex : BRCA1, TP53, EGFR, MYC, KRAS, ALK...) ou tapez pour chercher..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setShowAutocomplete(true)
                }}
                onFocus={() => {
                  if (autocompleteResults.length > 0) {
                    setShowAutocomplete(true)
                  }
                }}
                className="w-full px-6 py-4 text-lg bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
              />
              {isSearching ? (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                </div>
              ) : (
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}

              {/* Dropdown d'autocomplétion */}
              {showAutocomplete && autocompleteResults.length >= 0 && (
                <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl max-h-96 overflow-y-auto">
                  <div className="p-2">
                    <div className="text-xs text-gray-400 px-3 py-2 mb-1 border-b border-gray-700">
                      Suggestions de gènes
                    </div>
                    {autocompleteResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleGeneSelect(result.geneName)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-md transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-blue-400 group-hover:text-blue-300">
                              {result.geneName}
                            </div>
                            <div className="text-sm text-gray-400 mt-1 truncate">
                              {result.description}
                            </div>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-500 group-hover:text-blue-400 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="mb-4 text-gray-400">
            {filteredGenes.length > 0 ? (
              <p>{filteredGenes.length} gène{filteredGenes.length > 1 ? 's' : ''} trouvé{filteredGenes.length > 1 ? 's' : ''}</p>
            ) : (
              <p>Aucun gène trouvé</p>
            )}
          </div>

          {/* Gene Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGenes.map((gene) => {
              const geneInfo = genesInfo[gene]
              const isLoading = !geneInfo || geneInfo.loading
              const description = geneInfo?.description || ''
              const staticData = geneInfo?.staticData || genesStaticData[gene]
              const diseases = staticData?.diseases || []

              return (
                <div
                  key={gene}
                  className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-700 hover:border-blue-500 p-6"
                >
                  <h2 className="text-2xl font-bold text-blue-400 mb-3">{gene}</h2>
                  {isLoading ? (
                    <div className="flex items-center text-gray-400 mb-4">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400 mr-2"></div>
                      <span className="text-sm">Chargement de la description...</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {description || staticData?.description || 'Description non disponible'}
                      </p>
                      
                      {/* Maladies associées */}
                      {diseases.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-400 mb-2">Maladies associées :</h3>
                          <div className="flex flex-wrap gap-2">
                            {diseases.map((disease, index) => (
                              <span
                                key={index}
                                className="inline-block bg-red-900/30 border border-red-700/50 rounded px-2 py-1 text-xs text-red-300"
                              >
                                {disease}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <Link
                    to={`/gene/${gene}`}
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-md transition-all hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Voir les isoformes
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recherche

