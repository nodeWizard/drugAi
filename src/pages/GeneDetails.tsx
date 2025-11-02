import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { searchGeneProteins } from '../services/uniprot'
import { fetchAllAlphaFoldIsoforms, type AlphaFoldData } from '../services/alphafold'
import { translateToFrench } from '../services/translation'
import { genesStaticData } from '../data/genesData'

function GeneDetails() {
  const { geneName } = useParams<{ geneName: string }>()
  const [isoforms, setIsoforms] = useState<AlphaFoldData[]>([])
  const [translatedDescriptions, setTranslatedDescriptions] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!geneName) return

    setLoading(true)
    
    // D'abord, récupérer l'isoforme principale depuis UniProt
    searchGeneProteins(geneName)
      .then(async (info) => {
        console.log('📥 Informations reçues depuis UniProt:', info)
        
        // Si on a une isoforme principale, utiliser AlphaFold pour récupérer TOUTES les isoformes
        if (info.primaryIsoform?.primaryAccession) {
          console.log('🔍 Récupération de toutes les isoformes depuis AlphaFold pour:', info.primaryIsoform.primaryAccession)
          const allIsoforms = await fetchAllAlphaFoldIsoforms(info.primaryIsoform.primaryAccession)
          console.log('✅', allIsoforms.length, 'isoformes trouvées dans AlphaFold')
          setIsoforms(allIsoforms)
          
          // Traduire les descriptions des isoformes
          const descriptions: Record<string, string> = {}
          await Promise.all(
            allIsoforms.map(async (isoform) => {
              if (isoform.uniprotDescription) {
                descriptions[isoform.modelEntityId] = await translateToFrench(isoform.uniprotDescription)
              }
            })
          )
          setTranslatedDescriptions(descriptions)
        } else {
          console.warn('⚠️ Aucune isoforme principale trouvée')
          setIsoforms([])
        }
        
        setLoading(false)
      })
      .catch((error) => {
        console.error('❌ Erreur lors du chargement:', error)
        setLoading(false)
        setIsoforms([])
      })
  }, [geneName])

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/recherche"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à la recherche
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{geneName}</h1>
          
          {/* Description et maladies du gène - Affichées immédiatement */}
          {geneName && genesStaticData[geneName] && (
            <>
              <div className="mb-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {genesStaticData[geneName].description}
                </p>
              </div>
              
              {genesStaticData[geneName].diseases.length > 0 && (
                <div className="mb-8 bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                    <svg className="w-6 h-6 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Maladies associées au gène {geneName}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {genesStaticData[geneName].diseases.map((disease: string, index: number) => (
                      <span
                        key={index}
                        className="inline-block bg-red-900/40 border border-red-700 rounded px-3 py-1.5 text-sm text-red-200 font-medium"
                      >
                        {disease}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 italic">
                    Note : Les maladies sont associées au gène. Les mutations dans ce gène peuvent affecter ses différentes isoformes.
                  </p>
                </div>
              )}
            </>
          )}

          <p className="text-xl text-gray-400 mb-8">
            Isoformes avec structure AlphaFold disponible
          </p>

          {loading ? (
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700 text-center">
              <div className="text-gray-400">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                <p className="text-lg text-gray-300">
                  Recherche des isoformes avec structure AlphaFold pour {geneName}...
                </p>
              </div>
            </div>
          ) : isoforms.length === 0 ? (
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700 text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-white mb-2">Aucune isoforme trouvée</h2>
              <p className="text-gray-400">
                Aucune protéine avec structure AlphaFold disponible pour le gène {geneName}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isoforms.map((isoform) => (
                <Link
                  key={isoform.modelEntityId}
                  to={`/gene/${geneName}/proteine/${isoform.uniprotAccession}`}
                  className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-700 hover:border-blue-500 p-6 block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-blue-400">
                      {isoform.uniprotAccession}
                    </h2>
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  {isoform.uniprotDescription && (
                    <p className="text-gray-300 mb-2 text-sm">
                      {translatedDescriptions[isoform.modelEntityId] || isoform.uniprotDescription}
                    </p>
                  )}
                  
                  <div className="flex items-center mt-4 text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Structure AlphaFold disponible
                  </div>
                  
                  {isoform.sequence && (
                    <p className="text-gray-500 text-xs mt-2">
                      {isoform.sequence.length} acides aminés
                    </p>
                  )}
                  
                  {isoform.globalMetricValue !== undefined && (
                    <p className="text-gray-500 text-xs mt-1">
                      Score de confiance: {isoform.globalMetricValue.toFixed(1)}%
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GeneDetails

