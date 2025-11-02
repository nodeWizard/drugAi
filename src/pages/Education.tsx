function Education() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Comment AlphaFold a révolutionné la recherche médicale
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Découvrez comment l'intelligence artificielle transforme la découverte de médicaments
          </p>

          {/* Section 1: Pourquoi les protéines sont importantes */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 hover:shadow-2xl hover:bg-gray-700 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-blue-600/20 rounded-full p-3 mr-4 border border-blue-500">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Pourquoi les protéines sont importantes
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Les protéines déterminent presque toutes les fonctions biologiques du corps humain. 
                  Elles agissent comme des machines moléculaires, des catalyseurs, des régulateurs, 
                  et des structures fondamentales de nos cellules. Comprendre leur forme tridimensionnelle 
                  est essentiel, car la structure d'une protéine détermine directement sa fonction. 
                  En connaissant la structure précise d'une protéine, les scientifiques peuvent comprendre 
                  comment elle interagit avec d'autres molécules, pourquoi elle peut mal fonctionner 
                  dans certaines maladies, et comment concevoir des médicaments qui ciblent spécifiquement 
                  cette protéine pour traiter des pathologies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Ce que fait AlphaFold */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 hover:shadow-2xl hover:bg-gray-700 border border-gray-700 hover:border-green-500 transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-green-600/20 rounded-full p-3 mr-4 border border-green-500">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ce que fait AlphaFold
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  AlphaFold, développé par DeepMind, est un système d'intelligence artificielle qui 
                  prédit la structure 3D des protéines avec une précision jamais atteinte auparavant. 
                  Traditionnellement, déterminer la structure d'une protéine nécessitait des années 
                  de recherche en laboratoire utilisant des techniques coûteuses comme la cristallographie 
                  aux rayons X ou la spectroscopie RMN. AlphaFold peut prédire la structure d'une protéine 
                  en quelques minutes ou heures, simplement à partir de sa séquence d'acides aminés.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Le système a été entraîné sur des milliers de structures protéiques connues et utilise 
                  des réseaux de neurones profonds pour apprendre les règles de repliement des protéines. 
                  Cette révolution technologique ouvre la voie à une recherche médicale plus rapide, 
                  permettant aux scientifiques de comprendre des protéines qui étaient auparavant impossibles 
                  à étudier par des méthodes expérimentales.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Impact sur la recherche */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700 hover:shadow-2xl hover:bg-gray-700 hover:border-purple-500 transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-purple-600/20 rounded-full p-3 mr-4 border border-purple-500">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Impact sur la recherche
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Grâce à l'intelligence artificielle et aux outils comme AlphaFold, la phase de découverte 
                  d'un médicament peut être réduite de plusieurs années. Voici comment :
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg ml-4">
                  <li>
                    <strong className="text-white">Identification rapide de cibles :</strong> Les chercheurs 
                    peuvent rapidement identifier les protéines impliquées dans une maladie et comprendre leur structure.
                  </li>
                  <li>
                    <strong className="text-white">Conception de médicaments :</strong> En connaissant la structure 
                    3D d'une protéine cible, les scientifiques peuvent concevoir des molécules qui s'y lient avec précision, 
                    comme une clé dans une serrure.
                  </li>
                  <li>
                    <strong className="text-white">Réduction des coûts :</strong> Moins d'expériences coûteuses 
                    en laboratoire sont nécessaires, réduisant le coût global du processus de découverte.
                  </li>
                  <li>
                    <strong className="text-white">Accélération du processus :</strong> Ce qui prenait des années 
                    peut maintenant être accompli en mois, permettant de répondre plus rapidement aux besoins médicaux urgents.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Education

