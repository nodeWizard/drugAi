import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { searchGeneProteins, getProteinFullName } from '../services/uniprot'
import { translateToFrench } from '../services/translation'
import { genes, genesStaticData, type GeneStaticData } from '../data/genesData'

interface GeneInfo {
  name: string
  description: string
  loading: boolean
  staticData?: GeneStaticData
}

function Recherche() {
  const [searchTerm, setSearchTerm] = useState('')
  const [genesInfo, setGenesInfo] = useState<Record<string, GeneInfo>>({})

  const filteredGenes = genes.filter(
    gene => gene.toLowerCase().includes(searchTerm.toLowerCase())
  )

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

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un gène (ex : BRCA1, TP53, EGFR...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
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

