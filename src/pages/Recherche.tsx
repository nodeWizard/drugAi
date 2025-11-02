import { useState } from 'react'
import { Link } from 'react-router-dom'

const proteins = [
  {
    id: 1,
    name: 'BRCA1',
    desc: 'Protéine liée au cancer du sein',
    fullDesc: 'BRCA1 (Breast Cancer 1) est une protéine de réparation de l\'ADN qui joue un rôle crucial dans la prévention du cancer du sein et des ovaires.'
  },
  {
    id: 2,
    name: 'TP53',
    desc: 'Régule la division cellulaire et empêche la formation de tumeurs',
    fullDesc: 'TP53, également appelé "garde du génome", est une protéine suppresseur de tumeur qui régule le cycle cellulaire et déclenche l\'apoptose en cas de dommages à l\'ADN.'
  },
  {
    id: 3,
    name: 'EGFR',
    desc: 'Régulateur de la croissance et de la division cellulaire',
    fullDesc: 'EGFR (Epidermal Growth Factor Receptor) est impliqué dans la croissance cellulaire et est souvent surexprimé dans plusieurs types de cancers.'
  },
  {
    id: 4,
    name: 'VEGFR',
    desc: 'Régulateur de la formation de nouveaux vaisseaux sanguins',
    fullDesc: 'VEGFR (Vascular Endothelial Growth Factor Receptor) joue un rôle clé dans l\'angiogenèse et est une cible importante pour les thérapies anticancéreuses.'
  },
  {
    id: 5,
    name: 'HER2',
    desc: 'Récepteur de facteurs de croissance impliqué dans le cancer',
    fullDesc: 'HER2 (Human Epidermal growth factor Receptor 2) est un récepteur qui, lorsqu\'il est surexprimé, est associé à des formes agressives de cancer du sein.'
  },
  {
    id: 6,
    name: 'PD-1',
    desc: 'Régulateur de la réponse immunitaire',
    fullDesc: 'PD-1 (Programmed Death-1) est une protéine qui inhibe la réponse immunitaire et est une cible majeure en immunothérapie contre le cancer.'
  }
]

function Recherche() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProteins = proteins.filter(
    protein =>
      protein.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      protein.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recherche de protéines
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explorez notre base de données de protéines et découvrez leur rôle dans les maladies
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une protéine (ex : BRCA1, TP53...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
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
          <div className="mb-4 text-gray-600">
            {filteredProteins.length > 0 ? (
              <p>{filteredProteins.length} protéine{filteredProteins.length > 1 ? 's' : ''} trouvée{filteredProteins.length > 1 ? 's' : ''}</p>
            ) : (
              <p>Aucune protéine trouvée</p>
            )}
          </div>

          {/* Protein Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProteins.map((protein) => (
              <div
                key={protein.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-3">{protein.name}</h2>
                <p className="text-gray-600 mb-4">{protein.desc}</p>
                <Link
                  to={`/proteine/${protein.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
                >
                  Voir les détails
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recherche

