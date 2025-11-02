import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { 
  fetchAlphaFoldData, 
  getAlphaFoldViewerUrl, 
  type AlphaFoldData 
} from '../services/alphafold'
import { 
  getProteinDetails, 
  extractFunction, 
  extractDiseases, 
  getProteinFullName,
  extractSubcellularLocation,
  calculateMolecularWeight,
  extractAlternativeNames,
  type UniProtEntry 
} from '../services/uniprot'
import { translateToFrench } from '../services/translation'

function ProteineDetail() {
  const { geneName, uniprotId } = useParams<{ geneName: string; uniprotId: string }>()
  const [protein, setProtein] = useState<UniProtEntry | null>(null)
  const [alphafoldData, setAlphafoldData] = useState<AlphaFoldData | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingProtein, setLoadingProtein] = useState(false)
  const [proteinFullName, setProteinFullName] = useState('')
  const [functionDescription, setFunctionDescription] = useState('')
  const [diseases, setDiseases] = useState<string[]>([])
  const [subcellularLocations, setSubcellularLocations] = useState<string[]>([])
  const [molecularWeight, setMolecularWeight] = useState<number | null>(null)
  const [alternativeNames, setAlternativeNames] = useState<string[]>([])

  // Charger les informations de la protéine depuis UniProt
  useEffect(() => {
    if (!uniprotId) {
      console.warn('⚠️ Aucun UniProt ID fourni')
      return
    }

    console.log('🚀 Chargement des informations pour la protéine:', uniprotId)
    setLoadingProtein(true)
    
    getProteinDetails(uniprotId)
      .then((proteinData) => {
        console.log('📥 Informations protéine reçues:', proteinData)
        if (proteinData) {
          setProtein(proteinData)
        } else {
          console.error('❌ Aucune donnée protéine trouvée')
        }
        setLoadingProtein(false)
      })
      .catch((error) => {
        console.error('❌ Erreur lors du chargement de la protéine:', error)
        setLoadingProtein(false)
      })
  }, [uniprotId])

  // Charger les données AlphaFold pour la protéine
  useEffect(() => {
    if (!uniprotId) return

    setLoading(true)
    fetchAlphaFoldData(uniprotId)
      .then((data) => {
        setAlphafoldData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données AlphaFold:', error)
        setLoading(false)
      })
  }, [uniprotId])

  // Traduire les informations de la protéine
  useEffect(() => {
    if (!protein) {
      setProteinFullName('')
      setFunctionDescription('')
      setDiseases([])
      return
    }

    const translateProteinInfo = async () => {
      const fullName = getProteinFullName(protein)
      const functionDesc = extractFunction(protein)
      const diseaseList = extractDiseases(protein)
      const locations = extractSubcellularLocation(protein)
      const weight = calculateMolecularWeight(protein.sequence || null)
      const altNames = extractAlternativeNames(protein)

      // Traduire en parallèle
      const [translatedName, translatedFunction, translatedDiseases, translatedLocations] = await Promise.all([
        translateToFrench(fullName),
        functionDesc ? translateToFrench(functionDesc) : Promise.resolve(''),
        Promise.all(diseaseList.map(d => translateToFrench(d))),
        Promise.all(locations.map(l => translateToFrench(l)))
      ])

      setProteinFullName(translatedName)
      setFunctionDescription(translatedFunction)
      setDiseases(translatedDiseases)
      setSubcellularLocations(translatedLocations)
      setMolecularWeight(weight)
      setAlternativeNames(altNames)
    }

    translateProteinInfo()
  }, [protein])

  // Affichage du chargement initial
  if (loadingProtein) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 text-center">
          <div className="text-gray-400">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-300">Chargement des informations de la protéine {uniprotId}...</p>
          </div>
        </div>
      </div>
    )
  }

  // Si aucune protéine trouvée
  if (!protein) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Protéine non trouvée</h1>
          <p className="text-gray-300 mb-4">
            Aucune information trouvée pour la protéine {uniprotId}
          </p>
          <Link to="/recherche" className="text-blue-400 hover:text-blue-300 transition-colors">
            Retour à la recherche
          </Link>
        </div>
      </div>
    )
  }

  // Le nom du gène vient directement de l'URL
  const displayGeneName = geneName || 'Inconnu'

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to={`/gene/${displayGeneName}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au gène {displayGeneName}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {protein.uniProtkbId || protein.primaryAccession}
          </h1>
          <p className="text-xl text-gray-400 mb-2">{proteinFullName}</p>
          {displayGeneName !== 'Inconnu' && (
            <p className="text-lg text-gray-500 mb-8">Gène: {displayGeneName}</p>
          )}

          {/* Structure 3D Section */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Structure 3D AlphaFold</h2>
            {loading ? (
              <div className="bg-gray-900 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center border border-gray-700">
                <div className="text-gray-400">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                  <p className="text-lg text-gray-300">Chargement des données AlphaFold...</p>
                </div>
              </div>
            ) : alphafoldData ? (
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">UniProt ID</p>
                      <p className="text-white font-mono">{alphafoldData.uniprotAccession || protein.primaryAccession}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Organisme</p>
                      <p className="text-white">{alphafoldData.organismScientificName || 'Homo sapiens'}</p>
                    </div>
                    {alphafoldData.globalMetricValue !== undefined && (
                      <div>
                        <p className="text-gray-400 mb-1">Score de confiance global (LDDT)</p>
                        <p className="text-white font-semibold">{alphafoldData.globalMetricValue.toFixed(1)}%</p>
                      </div>
                    )}
                    {alphafoldData.fractionPlddtVeryHigh !== undefined && (
                      <div>
                        <p className="text-gray-400 mb-1">Régions très confiantes</p>
                        <p className="text-white">{(alphafoldData.fractionPlddtVeryHigh * 100).toFixed(1)}%</p>
                      </div>
                    )}
                    {alphafoldData.fractionPlddtConfident !== undefined && (
                      <div>
                        <p className="text-gray-400 mb-1">Régions confiantes</p>
                        <p className="text-white">{(alphafoldData.fractionPlddtConfident * 100).toFixed(1)}%</p>
                      </div>
                    )}
                    {alphafoldData.fractionPlddtLow !== undefined && (
                      <div>
                        <p className="text-gray-400 mb-1">Régions faible confiance</p>
                        <p className="text-white">{(alphafoldData.fractionPlddtLow * 100).toFixed(1)}%</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-lg text-gray-300 mb-4">Visualisation 3D de {protein.uniProtkbId || protein.primaryAccession}</p>
                    {protein.primaryAccession && (
                      <a
                        href={getAlphaFoldViewerUrl(protein.primaryAccession)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      >
                        Voir sur AlphaFold Database
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-900 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center border border-gray-700">
                <div className="text-gray-400">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-lg text-gray-300 mb-2">Visualisation 3D de {protein.uniProtkbId || protein.primaryAccession}</p>
                  <p className="text-sm">Données AlphaFold non disponibles</p>
                  {protein.primaryAccession && (
                    <a
                      href={getAlphaFoldViewerUrl(protein.primaryAccession)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Rechercher sur AlphaFold Database
                    </a>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* Fonction biologique */}
          {functionDescription && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Fonction biologique</h2>
              <p className="text-gray-300 leading-relaxed">{functionDescription}</p>
          </section>
          )}

          {/* Maladies associées */}
          {diseases.length > 0 && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Maladies associées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diseases.map((disease, index) => (
                <div
                  key={index}
                  className="bg-red-900/30 border border-red-700 rounded-lg p-4 hover:bg-red-900/50 hover:border-red-500 transition-all cursor-pointer"
                >
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-lg font-medium text-white">{disease}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          )}

                  {/* Séquence d'acides aminés */}
                  {protein.sequence && (
                    <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
                      <h2 className="text-2xl font-bold text-white mb-4">Séquence d'acides aminés</h2>
                      <div className="mb-4">
                        <p className="text-gray-400 mb-2">
                          Longueur : <span className="text-white font-semibold">{protein.sequence.length}</span> acides aminés
                        </p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 overflow-x-auto">
                        <div className="font-mono text-sm text-green-300 break-all whitespace-pre-wrap leading-relaxed">
                          {protein.sequence.value}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Séquence au format à une lettre (IUPAC). Chaque lettre représente un acide aminé.
                      </p>
                    </section>
                  )}

                  {/* Noms alternatifs */}
                  {alternativeNames.length > 0 && (
                    <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
                      <h2 className="text-2xl font-bold text-white mb-4">Noms alternatifs</h2>
                      <div className="flex flex-wrap gap-2">
                        {alternativeNames.map((name, index) => (
                          <span
                            key={index}
                            className="inline-block bg-blue-900/30 border border-blue-700/50 rounded px-3 py-1.5 text-sm text-blue-300"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Localisation subcellulaire */}
                  {subcellularLocations.length > 0 && (
                    <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
                      <h2 className="text-2xl font-bold text-white mb-4">Localisation subcellulaire</h2>
                      <div className="flex flex-wrap gap-2">
                        {subcellularLocations.map((location, index) => (
                          <span
                            key={index}
                            className="inline-block bg-purple-900/30 border border-purple-700/50 rounded px-3 py-1.5 text-sm text-purple-300"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Informations supplémentaires */}
                  <section className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                    <h2 className="text-2xl font-bold text-white mb-4">Informations supplémentaires</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <p className="text-gray-400 mb-1">Organisme</p>
                        <p className="text-white">{protein.organism?.scientificName || 'Homo sapiens'}</p>
                        {protein.organism?.commonName && (
                          <p className="text-gray-500 text-sm mt-1">({protein.organism.commonName})</p>
                        )}
                      </div>
                      {protein.sequence && (
                        <div>
                          <p className="text-gray-400 mb-1">Longueur de la séquence</p>
                          <p className="text-white">{protein.sequence.length} acides aminés</p>
                        </div>
                      )}
                      {molecularWeight && (
                        <div>
                          <p className="text-gray-400 mb-1">Masse moléculaire</p>
                          <p className="text-white">{molecularWeight.toLocaleString()} Da</p>
                        </div>
                      )}
                      {protein.annotationScore !== undefined && (
                        <div>
                          <p className="text-gray-400 mb-1">Score d'annotation</p>
                          <p className="text-white">{protein.annotationScore}/5</p>
                        </div>
                      )}
                      {protein.primaryAccession && (
                        <div>
                          <p className="text-gray-400 mb-1">UniProt ID</p>
                          <a
                            href={`https://www.uniprot.org/uniprotkb/${protein.primaryAccession}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-mono"
                          >
                            {protein.primaryAccession}
                          </a>
                        </div>
                      )}
                      {alphafoldData?.entryId && (
                        <div>
                          <p className="text-gray-400 mb-1">AlphaFold Entry ID</p>
                          <p className="text-white font-mono text-sm">{alphafoldData.entryId}</p>
                        </div>
                      )}
                    </div>
                  </section>
        </div>
      </div>
    </div>
  )
}

export default ProteineDetail

