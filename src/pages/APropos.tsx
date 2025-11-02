const teamMembers = [
  {
    name: 'Rawen Soltani',
    role: 'Étudiante en Ingénierie Informatique & Full Stack JS Developer',
    desc: 'Développeuse passionnée par les technologies web modernes et l\'intelligence artificielle'
  }
]

function APropos() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À propos de DrugAI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DrugAI est un projet éducatif qui vise à rendre les outils d'intelligence artificielle 
              accessibles aux étudiants, chercheurs et passionnés de santé. Inspiré par AlphaFold, 
              il montre comment l'IA transforme la découverte de médicaments.
            </p>
          </div>

          {/* Notre mission */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre mission</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Accélérer la compréhension scientifique et démocratiser la recherche médicale en Tunisie 
                  et dans le monde. Nous croyons que l'intelligence artificielle doit être accessible à tous, 
                  permettant aux chercheurs, étudiants et professionnels de la santé de comprendre et d'utiliser 
                  ces technologies révolutionnaires pour améliorer les soins médicaux et accélérer la découverte 
                  de nouveaux traitements.
                </p>
              </div>
            </div>
          </section>

          {/* Équipe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre équipe</h2>
            <div className="flex justify-center">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow text-center max-w-md"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Inspiration */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Inspiré par AlphaFold</h2>
              <p className="text-lg leading-relaxed">
                DrugAI s'inspire des innovations révolutionnaires de DeepMind's AlphaFold, qui a transformé 
                notre compréhension du repliement des protéines. Notre objectif est de rendre cette technologie 
                accessible et compréhensible pour la prochaine génération de chercheurs et développeurs médicaux.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default APropos

