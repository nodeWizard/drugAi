const teamMembers = [
  {
    name: 'Rawen Soltani',
    role: 'Étudiante en Ingénierie Informatique & Full Stack JS Developer',
    desc: 'Développeuse passionnée par les technologies web modernes et l\'intelligence artificielle'
  }
]

function APropos() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              À propos de DrugAI
            </h1>

          {/* Section principale */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              🚀 Notre mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              <strong className="text-blue-400">DrugAI</strong> est une plateforme innovante qui démocratise l'accès aux structures protéiques 
              prédites par AlphaFold. Notre application utilise directement l'API AlphaFold pour fournir un accès instantané 
              à plus de <strong className="text-green-400">200 millions de structures protéiques</strong> déjà prédites, 
              combinées avec les données biologiques complètes de UniProt.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Nous rendons la recherche en biologie structurale accessible à tous, des chercheurs aux étudiants, 
              en proposant une interface intuitive en français avec visualisation 3D intégrée directement dans le navigateur.
            </p>
          </section>

          {/* Utilisation d'AlphaFold */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-green-500">
            <div className="flex items-start mb-6">
              <div className="bg-green-600/20 rounded-full p-3 mr-4 border border-green-500 flex-shrink-0">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  🔬 Utilisation directe d'AlphaFold
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  DrugAI <strong className="text-green-400">utilise directement l'API AlphaFold</strong> développée par DeepMind. 
                  Nous ne faisons pas que nous inspirer d'AlphaFold — nous intégrons ses prédictions de structures 3D 
                  en temps réel dans notre plateforme.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Chaque structure 3D que vous visualisez dans DrugAI provient directement de la base de données AlphaFold, 
                  qui contient plus de <strong className="text-green-400">200 millions de structures protéiques prédites</strong>. 
                  Cela signifie que vous avez accès à un nombre impressionnant de structures déjà calculées, 
                  sans avoir à attendre des années d'expérimentation en laboratoire.
                </p>
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mt-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-green-400">💡 AlphaFold Database :</strong> Base de données publique contenant les prédictions 
                    de structures pour pratiquement toutes les protéines connues. DrugAI vous donne un accès direct à cette ressource 
                    révolutionnaire via une interface intuitive.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Nouvelle fonctionnalité : Prédiction par séquence */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-blue-500">
            <div className="flex items-start mb-6">
              <div className="bg-blue-600/20 rounded-full p-3 mr-4 border border-blue-500 flex-shrink-0">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">🧬 Prédiction 3D à partir de la séquence</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  En plus d'explorer les structures existantes d'AlphaFold, DrugAI permet désormais de <strong className="text-white">prédire la structure 3D d'une protéine</strong> directement à partir de sa <strong className="text-white">séquence d'acides aminés</strong>, puis de l'<strong className="text-white">afficher en 3D</strong> avec une <strong className="text-white">moyenne pLDDT en %</strong>.
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>Prédiction via l'<span className="text-blue-300 font-semibold">API ESMFold</span> (ESM Atlas)</li>
                  <li>Visualisation interactive avec <span className="text-cyan-300 font-semibold">3Dmol.js</span></li>
                  <li>Normalisation automatique du <span className="text-white font-semibold">pLDDT</span> sur 0–100 et affichage en %</li>
                </ul>
                <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mt-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-blue-300">Endpoint utilisé :</strong> <code className="text-gray-400">POST https://api.esmatlas.com/foldSequence/v1/pdb/</code>. La séquence est envoyée en texte brut et un fichier PDB est retourné avec les scores de confiance (pLDDT) encodés.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Valeur ajoutée */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-blue-500">
            <h2 className="text-3xl font-bold text-white mb-6">
              ⭐ Valeur ajoutée de DrugAI
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Bien qu'AlphaFold soit accessible directement, DrugAI apporte une valeur ajoutée significative en combinant 
              plusieurs sources de données et en offrant une expérience utilisateur optimisée :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/50">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Recherche intuitive par gènes</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Commencez par un nom de gène familier (BRCA1, TP53) plutôt que par un UniProt ID technique. 
                  L'app trouve automatiquement les protéines associées et leurs isoformes.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-purple-500/50">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Visualisation 3D intégrée</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Visualisez les structures 3D directement dans votre navigateur sans quitter l'application, 
                  grâce à l'intégration de 3Dmol.js.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-green-500/50">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Informations complètes unifiées</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Accédez en un seul endroit aux structures AlphaFold, fonctions biologiques, maladies associées, 
                  séquences d'acides aminés, et bien plus depuis UniProt.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-yellow-500/50">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Interface en français</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Toutes les descriptions et informations sont automatiquement traduites en français 
                  pour une meilleure compréhension.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-cyan-500/50">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Gestion intelligente des isoformes</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Découvrez automatiquement toutes les isoformes d'un gène qui ont une structure AlphaFold, 
                  avec leurs scores de confiance détaillés.
            </p>
          </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-red-500/50">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Contexte clinique intégré</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Obtenez immédiatement les informations sur les maladies associées aux gènes et protéines, 
                  facilitant la compréhension de leur rôle pathologique.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              🛠️ Technologies utilisées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">APIs externes</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong className="text-white">AlphaFold Database API</strong> : Structures 3D prédites (200M+ structures)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span><strong className="text-white">UniProt REST API</strong> : Informations biologiques complètes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span><strong className="text-white">Google Translate API</strong> : Traduction automatique</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Bibliothèques et outils</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span><strong className="text-white">React + TypeScript</strong> : Framework frontend moderne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <span><strong className="text-white">3Dmol.js</strong> : Visualisation moléculaire 3D</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong className="text-white">Tailwind CSS</strong> : Design responsive et moderne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span><strong className="text-white">React Router</strong> : Navigation fluide</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Différenciation */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-yellow-500">
            <h2 className="text-3xl font-bold text-white mb-6">
              🎯 Pourquoi DrugAI ?
            </h2>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                AlphaFold Database est une ressource formidable, mais elle nécessite de connaître l'UniProt ID 
                d'une protéine spécifique. DrugAI simplifie ce processus en permettant la recherche par nom de gène, 
                en affichant automatiquement toutes les isoformes disponibles, et en combinant les données de structure 
                avec les informations biologiques contextuelles.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                <strong className="text-yellow-400">Notre valeur ajoutée :</strong> Nous ne faisons pas que donner accès à AlphaFold — 
                nous créons une expérience de recherche complète qui guide l'utilisateur de la découverte d'un gène 
                jusqu'à l'analyse approfondie de ses protéines, le tout dans une interface intuitive et en français.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-yellow-400">Workflow optimisé</strong> : Navigation fluide Gènes → Isoformes → Détails</li>
                <li><strong className="text-yellow-400">Contexte enrichi</strong> : Maladies, fonctions, séquences en un seul endroit</li>
                <li><strong className="text-yellow-400">Visualisation intégrée</strong> : Plus besoin d'ouvrir plusieurs sites web</li>
                <li><strong className="text-yellow-400">Accessibilité</strong> : Interface en français pour les chercheurs francophones</li>
              </ul>
            </div>
          </section>

        

          {/* Équipe */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Notre équipe</h2>
            <div className="flex justify-center">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl hover:bg-gray-700 hover:scale-105 transition-all text-center max-w-md border border-gray-700 hover:border-blue-500"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default APropos