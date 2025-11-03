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

          {/* Section 3: Coûts de la découverte de médicaments */}
          <section className="bg-red-900/20 rounded-lg shadow-lg p-8 mb-8 border-2 border-red-500 hover:shadow-2xl transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-red-600/20 rounded-full p-3 mr-4 border border-red-500">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  💰 Le coût exorbitant de la découverte de médicaments
                </h2>
                <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-r-lg mb-4">
                  <p className="text-gray-200 leading-relaxed text-lg mb-3">
                    Selon le <strong className="text-white">Tufts Center for the Study of Drug Development</strong>, 
                    développer un nouveau médicament coûte en moyenne <strong className="text-red-400 text-xl">2,6 milliards de dollars</strong> 
                    et prend entre <strong className="text-red-400">10 à 15 ans</strong> avant d'atteindre le marché.
                  </p>
                  <p className="text-gray-200 leading-relaxed text-lg mb-3">
                    Cette estimation inclut le coût des échecs : <strong className="text-white">seulement 12% des médicaments</strong> 
                    qui entrent en essais cliniques sont finalement approuvés. Les <strong className="text-red-400">88% restants</strong> 
                    échouent à différentes étapes, ce qui fait grimper considérablement le coût moyen.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-red-500/50">
                    <h3 className="text-xl font-bold text-red-400 mb-2">Phase de découverte</h3>
                    <p className="text-gray-300">
                      <strong className="text-white">$500M - $1B</strong> pour identifier et valider une cible thérapeutique, 
                      développer des candidats médicaments, et effectuer des tests précliniques.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-red-500/50">
                    <h3 className="text-xl font-bold text-red-400 mb-2">Essais cliniques</h3>
                    <p className="text-gray-300">
                      <strong className="text-white">$1.5B - $2B</strong> pour les trois phases d'essais cliniques sur des patients 
                      (Phase I, II, III), avec un taux d'échec de 90% à cette étape.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-4 mt-4">
                  <p className="text-gray-200 text-sm">
                    <strong className="text-blue-400">📚 Source :</strong> Tufts Center for the Study of Drug Development (2014), 
                    "Cost of Developing a New Drug" - Tufts University School of Medicine. 
                    Les coûts ont augmenté depuis, avec des estimations récentes atteignant <strong className="text-blue-400">$3 milliards</strong> 
                    par médicament approuvé.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Impact sur la recherche */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700 hover:shadow-2xl hover:bg-gray-700 hover:border-purple-500 transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-purple-600/20 rounded-full p-3 mr-4 border border-purple-500">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  🚀 Comment AlphaFold et DrugAI révolutionnent la recherche
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Face à ces coûts exorbitants, l'intelligence artificielle et les outils comme AlphaFold offrent une solution 
                  révolutionnaire pour réduire drastiquement les coûts et accélérer la découverte :
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg ml-4">
                  <li>
                    <strong className="text-white">Réduction des coûts de 40-60% :</strong> L'utilisation d'IA pour la prédiction 
                    de structures peut réduire les coûts de la phase de découverte de <strong className="text-green-400">$500M à $200-300M</strong>, 
                    en éliminant le besoin de nombreuses expériences coûteuses en cristallographie ou RMN.
                  </li>
                  <li>
                    <strong className="text-white">Accélération de 5-10 ans :</strong> Ce qui prenait des années de recherche 
                    peut maintenant être accompli en <strong className="text-green-400">mois ou semaines</strong>, permettant de répondre 
                    plus rapidement aux besoins médicaux urgents et aux maladies rares négligées.
                  </li>
                  <li>
                    <strong className="text-white">Identification rapide de cibles :</strong> Les chercheurs peuvent rapidement 
                    identifier les protéines impliquées dans une maladie et comprendre leur structure 3D sans expérimentation préalable.
                  </li>
                  <li>
                    <strong className="text-white">Conception de médicaments précise :</strong> En connaissant la structure 3D 
                    d'une protéine cible, les scientifiques peuvent concevoir des molécules qui s'y lient avec précision, 
                    réduisant le nombre d'échecs coûteux dans les essais cliniques.
                  </li>
                  <li>
                    <strong className="text-white">Accessibilité démocratisée :</strong> DrugAI rend ces outils révolutionnaires 
                    accessibles aux chercheurs du monde entier, y compris dans les pays en développement, réduisant les inégalités 
                    d'accès à la recherche pharmaceutique.
                  </li>
                </ul>
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mt-6">
                  <p className="text-gray-200 text-sm">
                    <strong className="text-green-400">💡 Impact potentiel :</strong> Si seulement <strong className="text-green-400">10% des médicaments</strong> 
                    en développement bénéficiaient de ces technologies pour réduire leurs coûts de 40%, cela représenterait 
                    une économie mondiale de <strong className="text-green-400">plus de $10 milliards par an</strong> en recherche pharmaceutique.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Education

