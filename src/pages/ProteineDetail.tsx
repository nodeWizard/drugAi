import { useParams, Link } from 'react-router-dom'

// Données statiques des protéines
const proteinData: Record<number, {
  name: string
  fullDesc: string
  diseases: string[]
  molecules: Array<{ name: string; desc: string }>
}> = {
  1: {
    name: 'BRCA1',
    fullDesc: 'BRCA1 (Breast Cancer 1) est une protéine de réparation de l\'ADN qui joue un rôle crucial dans la prévention du cancer du sein et des ovaires. Elle participe à la réparation des cassures double-brin de l\'ADN et maintient la stabilité génomique.',
    diseases: ['Cancer du sein', 'Cancer des ovaires', 'Cancer de la prostate'],
    molecules: [
      { name: 'Olaparib', desc: 'Inhibiteur de PARP utilisé dans le traitement du cancer du sein et des ovaires liés à BRCA1' },
      { name: 'Talazoparib', desc: 'Inhibiteur de PARP efficace contre les tumeurs avec mutations BRCA1' },
      { name: 'Rucaparib', desc: 'Médicament ciblant les voies de réparation de l\'ADN affectées par BRCA1' }
    ]
  },
  2: {
    name: 'TP53',
    fullDesc: 'TP53, également appelé "garde du génome", est une protéine suppresseur de tumeur qui régule le cycle cellulaire et déclenche l\'apoptose en cas de dommages à l\'ADN. Les mutations de TP53 sont présentes dans plus de 50% des cancers humains.',
    diseases: ['Cancer du poumon', 'Leucémie', 'Cancer colorectal', 'Cancer du sein'],
    molecules: [
      { name: 'PRIMA-1', desc: 'Composé qui restaure la fonction des mutants TP53' },
      { name: 'Nutlin-3', desc: 'Antagoniste de MDM2 qui stabilise TP53' },
      { name: 'RG7388', desc: 'Inhibiteur de MDM2 pour activer TP53 dans les cellules cancéreuses' }
    ]
  },
  3: {
    name: 'EGFR',
    fullDesc: 'EGFR (Epidermal Growth Factor Receptor) est impliqué dans la croissance cellulaire et est souvent surexprimé dans plusieurs types de cancers. Il transmet des signaux qui favorisent la prolifération cellulaire.',
    diseases: ['Cancer du poumon non à petites cellules', 'Cancer colorectal', 'Cancer de la tête et du cou'],
    molecules: [
      { name: 'Gefitinib', desc: 'Inhibiteur de tyrosine kinase ciblant EGFR' },
      { name: 'Erlotinib', desc: 'Médicament bloquant la signalisation EGFR' },
      { name: 'Osimertinib', desc: 'Inhibiteur de troisième génération pour les mutations EGFR' }
    ]
  },
  4: {
    name: 'VEGFR',
    fullDesc: 'VEGFR (Vascular Endothelial Growth Factor Receptor) joue un rôle clé dans l\'angiogenèse et est une cible importante pour les thérapies anticancéreuses. Il régule la formation de nouveaux vaisseaux sanguins.',
    diseases: ['Cancer du rein', 'Cancer colorectal', 'Cancer du foie'],
    molecules: [
      { name: 'Bevacizumab', desc: 'Anticorps monoclonal bloquant le VEGF' },
      { name: 'Sunitinib', desc: 'Inhibiteur de tyrosine kinase multi-cibles incluant VEGFR' },
      { name: 'Sorafenib', desc: 'Inhibiteur de VEGFR utilisé dans le cancer du rein et du foie' }
    ]
  },
  5: {
    name: 'HER2',
    fullDesc: 'HER2 (Human Epidermal growth factor Receptor 2) est un récepteur qui, lorsqu\'il est surexprimé, est associé à des formes agressives de cancer du sein. Il favorise la croissance et la division cellulaire.',
    diseases: ['Cancer du sein HER2+', 'Cancer de l\'estomac'],
    molecules: [
      { name: 'Trastuzumab', desc: 'Anticorps monoclonal ciblant HER2 dans le cancer du sein' },
      { name: 'Pertuzumab', desc: 'Anticorps bloquant la dimérisation de HER2' },
      { name: 'Lapatinib', desc: 'Inhibiteur de tyrosine kinase ciblant HER2 et EGFR' }
    ]
  },
  6: {
    name: 'PD-1',
    fullDesc: 'PD-1 (Programmed Death-1) est une protéine qui inhibe la réponse immunitaire et est une cible majeure en immunothérapie contre le cancer. Les inhibiteurs de PD-1 permettent au système immunitaire d\'attaquer les cellules cancéreuses.',
    diseases: ['Mélanome', 'Cancer du poumon', 'Cancer du rein', 'Lymphome'],
    molecules: [
      { name: 'Pembrolizumab', desc: 'Inhibiteur de PD-1 utilisé dans plusieurs types de cancers' },
      { name: 'Nivolumab', desc: 'Anticorps anti-PD-1 en immunothérapie' },
      { name: 'Cemiplimab', desc: 'Inhibiteur de PD-1 pour le traitement du cancer de la peau' }
    ]
  }
}

function ProteineDetail() {
  const { id } = useParams<{ id: string }>()
  const proteinId = id ? parseInt(id) : 0
  const protein = proteinData[proteinId]

  if (!protein) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Protéine non trouvée</h1>
          <Link to="/recherche" className="text-blue-400 hover:text-blue-300 transition-colors">
            Retour à la recherche
          </Link>
        </div>
      </div>
    )
  }

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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">{protein.name}</h1>

          {/* Structure 3D Section */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Structure 3D</h2>
            <div className="bg-gray-900 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center border border-gray-700">
              <div className="text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-lg text-gray-300">Visualisation 3D de {protein.name}</p>
                <p className="text-sm mt-2">(Intégration 3Dmol.js possible ici)</p>
              </div>
            </div>
          </section>

          {/* Fonction biologique */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Fonction biologique</h2>
            <p className="text-gray-300 leading-relaxed">{protein.fullDesc}</p>
          </section>

          {/* Maladies associées */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Maladies associées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {protein.diseases.map((disease, index) => (
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

          {/* Molécules connues */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Molécules connues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protein.molecules.map((molecule, index) => (
                <div
                  key={index}
                  className="bg-blue-900/30 border border-blue-700 rounded-lg p-5 hover:bg-blue-900/50 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{molecule.name}</h3>
                  <p className="text-gray-300 text-sm">{molecule.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProteineDetail

