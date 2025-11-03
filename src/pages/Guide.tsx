function Guide() {
  return (
    <div className="min-h-screen">
      {/* Section Flux d'utilisation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Guide d'utilisation de DrugAI
          </h1>
          
          {/* Flux de navigation */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              🔄 Flux de navigation
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-blue-500">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Recherche de gènes
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Commencez par rechercher un gène d'intérêt sur la page <strong className="text-blue-400">Recherche</strong>. 
                      Vous pouvez rechercher parmi une liste de gènes pré-définis ou utiliser la barre de recherche pour trouver d'autres gènes.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Recherche dans une liste de ~100 gènes prédéfinis</li>
                      <li>Chaque gène affiche sa description et les maladies associées</li>
                      <li>Informations chargées depuis l'API UniProt en temps réel</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-green-500">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Affichage des informations du gène
                    </h3>
                    <p className="text-gray-300 mb-3">
                      En cliquant sur un gène, vous accédez à la page des détails du gène qui affiche immédiatement :
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li><strong className="text-green-400">Description du gène</strong> : Rôle biologique et fonction principale</li>
                      <li><strong className="text-red-400">Maladies associées</strong> : Liste des maladies liées aux mutations ou dysfonctionnements du gène</li>
                      <li><strong className="text-blue-400">Isoformes disponibles</strong> : Toutes les variantes de protéines avec structure AlphaFold</li>
                    </ul>
                    <p className="text-gray-400 text-sm mt-3 italic">
                      Les informations de description et de maladies sont affichées immédiatement depuis les données statiques, 
                      tandis que les isoformes sont chargées en arrière-plan depuis l'API AlphaFold.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-purple-500">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Sélection d'une isoforme
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Cliquez sur une isoforme pour voir ses détails complets :
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>UniProt ID de l'isoforme</li>
                      <li>Description de la protéine</li>
                      <li>Longueur de la séquence</li>
                      <li>Score de confiance AlphaFold (pLDDT)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-yellow-500">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Analyse détaillée de la protéine
                    </h3>
                    <p className="text-gray-300 mb-3">
                      La page de détails de la protéine affiche :
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li><strong className="text-yellow-400">Structure 3D interactive</strong> : Visualisation 3D intégrée avec 3Dmol.js</li>
                      <li><strong className="text-blue-400">Fonction biologique</strong> : Rôle et mécanismes d'action</li>
                      <li><strong className="text-red-400">Maladies associées</strong> : Pathologies liées à cette protéine</li>
                      <li><strong className="text-green-400">Séquence d'acides aminés</strong> : Séquence complète au format IUPAC</li>
                      <li><strong className="text-cyan-400">Informations supplémentaires</strong> : Masse moléculaire, localisation subcellulaire, domaines fonctionnels</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-blue-500">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Prédiction 3D à partir d'une séquence
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Depuis la page <strong className="text-blue-400">Prédiction 3D</strong>, collez une séquence d'acides aminés, puis générez automatiquement la
                      <strong className="text-white"> structure 3D</strong> et sa <strong className="text-white">confiance (pLDDT)</strong>.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Utilise l'<strong className="text-blue-300">ESMFold API</strong> pour calculer la structure</li>
                      <li>Affichage interactif avec <strong className="text-cyan-300">3Dmol.js</strong></li>
                      <li>Moyenne <strong className="text-white">pLDDT en %</strong> et fractions par classe (Très haute, Confiance, Faible, Très faible)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* APIs utilisées */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              🔌 APIs utilisées
            </h2>
            
            <div className="space-y-6">
              {/* API UniProt */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">UniProt REST API</h3>
                    <p className="text-gray-400 text-sm">Base de données universelle des protéines</p>
                    <a 
                      href="https://www.uniprot.org/help/api" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Documentation officielle →
                    </a>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">1. Recherche de gènes</h4>
                    <p className="text-gray-300 mb-2">Endpoint utilisé :</p>
                    <code className="block bg-gray-800 p-3 rounded text-sm text-green-300 font-mono mb-2">
                      GET https://rest.uniprot.org/uniprotkb/search?query=gene:&#123;geneName&#125; AND reviewed:true AND organism_id:9606
                    </code>
                    <p className="text-gray-300 text-sm">
                      Cette requête recherche toutes les protéines humaines (organisme_id:9606) codées par un gène spécifique. 
                      Le paramètre <code className="text-blue-400">reviewed:true</code> garantit que seules les entrées vérifiées manuellement (Swiss-Prot) sont retournées.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">2. Détails d'une protéine</h4>
                    <p className="text-gray-300 mb-2">Endpoint utilisé :</p>
                    <code className="block bg-gray-800 p-3 rounded text-sm text-green-300 font-mono mb-2">
                      GET https://rest.uniprot.org/uniprotkb/&#123;uniprotId&#125;.json
                    </code>
                    <p className="text-gray-300 text-sm">
                      Récupère toutes les informations détaillées d'une protéine spécifique via son UniProt ID, incluant :
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2 space-y-1">
                      <li>Nom complet de la protéine (recommendedName, alternativeNames)</li>
                      <li>Commentaires (fonction biologique, maladies, localisation subcellulaire)</li>
                      <li>Séquence complète d'acides aminés</li>
                      <li>Features (domaines, régions fonctionnelles, sites de liaison)</li>
                      <li>Informations sur l'organisme</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded">
                    <h5 className="font-semibold text-blue-300 mb-2">Extraction des informations</h5>
                    <p className="text-gray-300 text-sm">
                      Les fonctions suivantes extraient les données pertinentes de la réponse UniProt :
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2 space-y-1">
                      <li><code className="text-blue-400">extractFunction()</code> : Extrait la fonction biologique depuis les commentaires</li>
                      <li><code className="text-blue-400">extractDiseases()</code> : Liste les maladies associées</li>
                      <li><code className="text-blue-400">extractSubcellularLocation()</code> : Localisation dans la cellule</li>
                      <li><code className="text-blue-400">extractDomainsAndFeatures()</code> : Domaines et régions fonctionnelles</li>
                      <li><code className="text-blue-400">calculateMolecularWeight()</code> : Calcule la masse moléculaire depuis la séquence</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* API AlphaFold */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AlphaFold Database API</h3>
                    <p className="text-gray-400 text-sm">Base de données des structures protéiques prédites</p>
                    <p className="text-green-400 font-semibold text-sm mt-1">
                      🎯 Plus de <strong className="text-white">200 millions</strong> de structures protéiques prédites disponibles
                    </p>
                    <a 
                      href="https://alphafold.ebi.ac.uk/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 text-sm"
                    >
                      Site officiel →
                    </a>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded">
                  <h5 className="font-semibold text-green-300 mb-2">📊 Portée de la base de données AlphaFold</h5>
                  <p className="text-gray-300 text-sm mb-2">
                    La base de données AlphaFold contient actuellement <strong className="text-green-400">plus de 200 millions</strong> de structures protéiques prédites, 
                    couvrant pratiquement toutes les protéines connues dans la base de données UniProt. Cela signifie que :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mt-2 space-y-1">
                    <li>Presque toutes les protéines humaines ont une structure AlphaFold disponible</li>
                    <li>Les structures sont prédites avec une précision comparable aux méthodes expérimentales pour la majorité des résidus</li>
                    <li>Accès immédiat aux structures 3D sans avoir à attendre des années d'expérimentation</li>
                    <li>Possibilité d'explorer des isoformes alternatives qui n'ont jamais été étudiées expérimentalement</li>
                  </ul>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">1. Récupération de toutes les isoformes</h4>
                    <p className="text-gray-300 mb-2">Endpoint utilisé :</p>
                    <code className="block bg-gray-800 p-3 rounded text-sm text-green-300 font-mono mb-2">
                      GET https://alphafold.ebi.ac.uk/api/prediction/&#123;baseUniProtId&#125;
                    </code>
                    <p className="text-gray-300 text-sm">
                      Retourne un tableau de toutes les isoformes disponibles pour un UniProt ID de base. Par exemple, 
                      <code className="text-green-400"> P38398</code> retournera toutes les isoformes (P38398-1, P38398-5, P38398-6, etc.) 
                      qui ont une structure AlphaFold disponible.
                    </p>
                    <p className="text-gray-400 text-sm mt-2 italic">
                      Note : Le base ID est extrait en retirant le suffixe d'isoforme (ex: P38398-5 → P38398)
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">2. Données d'une isoforme spécifique</h4>
                    <p className="text-gray-300 mb-2">Endpoint utilisé :</p>
                    <code className="block bg-gray-800 p-3 rounded text-sm text-green-300 font-mono mb-2">
                      GET https://alphafold.ebi.ac.uk/api/prediction/&#123;uniprotId&#125;
                    </code>
                    <p className="text-gray-300 text-sm mb-2">
                      Retourne les données de structure pour une isoforme spécifique, incluant :
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm ml-4 space-y-1">
                      <li><strong>URLs des fichiers</strong> : PDB, CIF, BCIF pour la visualisation 3D</li>
                      <li><strong>Scores de confiance pLDDT</strong> : 
                        <ul className="list-circle list-inside ml-4 mt-1">
                          <li>globalMetricValue : Score moyen global</li>
                          <li>fractionPlddtVeryHigh : % de résidus avec pLDDT &gt; 90</li>
                          <li>fractionPlddtConfident : % avec pLDDT 70-90</li>
                          <li>fractionPlddtLow : % avec pLDDT 50-70</li>
                          <li>fractionPlddtVeryLow : % avec pLDDT &lt; 50</li>
                        </ul>
                      </li>
                      <li><strong>Métadonnées</strong> : Description, organisme, dates de création</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded">
                    <h5 className="font-semibold text-green-300 mb-2">Visualisation 3D</h5>
                    <p className="text-gray-300 text-sm mb-2">
                      Les fichiers de structure sont chargés directement dans le navigateur via :
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm ml-4 space-y-1">
                      <li><strong>3Dmol.js</strong> : Bibliothèque JavaScript pour la visualisation moléculaire</li>
                      <li><strong>Format PDB</strong> : Format texte standard pour les structures protéiques</li>
                      <li><strong>B-factor</strong> : Les fichiers AlphaFold stockent le pLDDT dans le champ B-factor pour la coloration par confiance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* API ESMFold (Séquence -> Structure) */}
              <div className="bg-gray-900 rounded-lg p-6 border border-blue-700">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">ESMFold API (Sequence → Structure)</h3>
                    <p className="text-gray-400 text-sm">Prédiction de structure 3D à partir d'une séquence</p>
                    <a 
                      href="https://esmatlas.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Site ESM Atlas →
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Endpoint principal</h4>
                  <code className="block bg-gray-800 p-3 rounded text-sm text-green-300 font-mono mb-2">
                    POST https://api.esmatlas.com/foldSequence/v1/pdb/
                  </code>
                  <p className="text-gray-300 text-sm mb-2">
                    Envoie une séquence d'acides aminés (texte brut) et retourne un fichier PDB avec la structure prédite. 
                    Le score de confiance <strong>pLDDT</strong> est encodé dans les colonnes <em>B-factor</em> (0–100) ou parfois <em>occupancy</em> (0–1).
                  </p>
                  <div className="mt-3 p-4 bg-blue-900/20 border border-blue-700 rounded">
                    <h5 className="font-semibold text-blue-300 mb-1">Intégration dans DrugAI</h5>
                    <ul className="list-disc list-inside text-gray-300 text-sm ml-4 space-y-1">
                      <li>La page <strong>Prédiction 3D</strong> permet de coller une séquence et d'obtenir la structure.</li>
                      <li>La visualisation est réalisée avec <strong>3Dmol.js</strong> à partir du PDB retourné.</li>
                      <li>Nous <strong>normalisons</strong> automatiquement pLDDT sur 0–100 et affichons la moyenne en %.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* API de traduction */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Google Translate API</h3>
                    <p className="text-gray-400 text-sm">Service de traduction automatique</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">
                  Les descriptions et informations provenant des APIs sont souvent en anglais. 
                  Une traduction automatique en français est effectuée pour améliorer l'expérience utilisateur.
                </p>
              </div>

              {/* API NCBI (Alternative) */}
              <div className="bg-gray-900 rounded-lg p-6 border border-cyan-500/50">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-600 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">NCBI Gene API (Alternative)</h3>
                    <p className="text-gray-400 text-sm">Base de données nationale de biotechnologie</p>
                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-cyan-900/30 text-cyan-300 border border-cyan-700 rounded">
                      API alternative disponible
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-cyan-900/10 border border-cyan-700/50 rounded">
                  <p className="text-gray-300 text-sm mb-3">
                    Une implémentation alternative utilisant l'<strong className="text-cyan-400">API NCBI E-utilities</strong> 
                    est disponible dans le code comme solution de repli pour la recherche de gènes. Cette API offre :
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm ml-4 space-y-1 mb-3">
                    <li>Accès à la base de données NCBI Gene (plus large couverture)</li>
                    <li>Recherche par nom de gène avec filtrage par organisme</li>
                    <li>Descriptions et résumés détaillés des gènes</li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-semibold text-cyan-300 mb-2 text-sm">Endpoints utilisés :</h5>
                    <code className="block bg-gray-800 p-2 rounded text-xs text-cyan-300 font-mono mb-2">
                      GET https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene&term=&#123;geneName&#125;[Gene+Name]+AND+human[Organism]
                    </code>
                    <code className="block bg-gray-800 p-2 rounded text-xs text-cyan-300 font-mono">
                      GET https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=&#123;geneIds&#125;
                    </code>
                  </div>
                  <p className="text-gray-400 text-xs mt-3 italic">
                    Note : Actuellement, l'application utilise principalement l'API UniProt pour la recherche de gènes. 
                    L'API NCBI peut être activée comme alternative si nécessaire.
                  </p>
                </div>
                <a 
                  href="https://www.ncbi.nlm.nih.gov/books/NBK25501/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block"
                >
                  Documentation NCBI E-utilities →
                </a>
              </div>
            </div>
          </section>

          {/* Processus technique */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              ⚙️ Processus technique détaillé
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  1. Recherche initiale d'un gène
                </h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <strong className="text-blue-400">Étape 1.1 :</strong> L'utilisateur saisit ou sélectionne un nom de gène (ex: BRCA1)
                  </p>
                  <p>
                    <strong className="text-blue-400">Étape 1.2 :</strong> Appel à l'API UniProt avec la requête :
                    <code className="block bg-gray-800 p-2 rounded mt-1 text-green-300 font-mono">
                      gene:BRCA1 AND reviewed:true AND organism_id:9606
                    </code>
                  </p>
                  <p>
                    <strong className="text-blue-400">Étape 1.3 :</strong> L'API retourne une liste de protéines associées au gène
                  </p>
                  <p>
                    <strong className="text-blue-400">Étape 1.4 :</strong> Extraction de l'isoforme principale (celle avec le meilleur score d'annotation)
                  </p>
                  <p>
                    <strong className="text-blue-400">Étape 1.5 :</strong> Récupération du nom complet de la protéine et traduction en français
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  2. Affichage des détails du gène
                </h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <strong className="text-green-400">Étape 2.1 :</strong> Affichage immédiat des données statiques (description, maladies) depuis <code className="text-green-400">genesData.ts</code>
                  </p>
                  <p>
                    <strong className="text-green-400">Étape 2.2 :</strong> En parallèle, récupération de l'UniProt ID de base (ex: P38398 pour BRCA1)
                  </p>
                  <p>
                    <strong className="text-green-400">Étape 2.3 :</strong> Appel à l'API AlphaFold pour obtenir toutes les isoformes :
                    <code className="block bg-gray-800 p-2 rounded mt-1 text-green-300 font-mono">
                      GET https://alphafold.ebi.ac.uk/api/prediction/P38398
                    </code>
                  </p>
                  <p>
                    <strong className="text-green-400">Étape 2.4 :</strong> L'API retourne un tableau avec toutes les isoformes (P38398-F1, P38398-5-F1, P38398-6-F1, etc.)
                  </p>
                  <p>
                    <strong className="text-green-400">Étape 2.5 :</strong> Affichage de chaque isoforme sous forme de carte avec :
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>UniProt Accession (ex: P38398-5)</li>
                      <li>Description traduite</li>
                      <li>Longueur de la séquence</li>
                      <li>Score de confiance global (pLDDT)</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  3. Affichage des détails d'une protéine
                </h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <strong className="text-purple-400">Étape 3.1 :</strong> Lors du clic sur une isoforme, récupération de l'UniProt ID (ex: P38398-5)
                  </p>
                  <p>
                    <strong className="text-purple-400">Étape 3.2 :</strong> Appel parallèle à deux APIs :
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li><strong>UniProt</strong> : Détails complets de la protéine</li>
                      <li><strong>AlphaFold</strong> : Données de structure 3D</li>
                    </ul>
                  </p>
                  <p>
                    <strong className="text-purple-400">Étape 3.3 :</strong> Extraction et traitement des données UniProt :
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Fonction biologique depuis les commentaires</li>
                      <li>Maladies associées</li>
                      <li>Localisation subcellulaire</li>
                      <li>Domaines et régions fonctionnelles</li>
                      <li>Calcul de la masse moléculaire</li>
                    </ul>
                  </p>
                  <p>
                    <strong className="text-purple-400">Étape 3.4 :</strong> Traduction en français de toutes les descriptions
                  </p>
                  <p>
                    <strong className="text-purple-400">Étape 3.5 :</strong> Chargement de la structure 3D :
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Téléchargement du fichier PDB depuis AlphaFold</li>
                      <li>Intégration dans 3Dmol.js pour visualisation interactive</li>
                      <li>Coloration par spectre (bleu → rouge) ou par score de confiance</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Données statiques */}
          <section className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              📊 Données statiques
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Pour améliorer les performances et l'expérience utilisateur, certaines données sont pré-chargées localement :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong className="text-yellow-400">Liste de gènes</strong> : ~100 gènes importants prédéfinis dans <code className="text-blue-400">src/data/genesData.ts</code>
                </li>
                <li>
                  <strong className="text-yellow-400">Descriptions et maladies</strong> : Pour chaque gène, une description en français et une liste de maladies associées sont stockées localement pour un affichage immédiat
                </li>
                <li>
                  <strong className="text-yellow-400">Données dynamiques</strong> : Les informations détaillées des protéines et isoformes sont toujours récupérées en temps réel depuis les APIs
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Guide

