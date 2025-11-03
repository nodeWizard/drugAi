// Données statiques des gènes avec descriptions et maladies associées
export interface GeneStaticData {
  name: string
  description: string
  diseases: string[]
}

export const genesStaticData: Record<string, GeneStaticData> = {
  // Gènes de réparation de l'ADN et suppresseurs de tumeurs
  'BRCA1': {
    name: 'BRCA1',
    description: 'BRCA1 (Breast Cancer 1) est une protéine de réparation de l\'ADN qui joue un rôle crucial dans la prévention du cancer du sein et des ovaires. Elle participe à la réparation des cassures double-brin de l\'ADN et maintient la stabilité génomique.',
    diseases: ['Cancer du sein', 'Cancer des ovaires', 'Cancer de la prostate']
  },
  'BRCA2': {
    name: 'BRCA2',
    description: 'BRCA2 (Breast Cancer 2) est une protéine de réparation de l\'ADN qui fonctionne avec BRCA1 pour maintenir la stabilité génomique et réparer les dommages à l\'ADN.',
    diseases: ['Cancer du sein', 'Cancer des ovaires', 'Cancer du pancréas']
  },
  'TP53': {
    name: 'TP53',
    description: 'TP53, également appelé "garde du génome", est une protéine suppresseur de tumeur qui régule le cycle cellulaire et déclenche l\'apoptose en cas de dommages à l\'ADN. Les mutations de TP53 sont présentes dans plus de 50% des cancers humains.',
    diseases: ['Cancer du poumon', 'Leucémie', 'Cancer colorectal', 'Cancer du sein']
  },
  'ATM': {
    name: 'ATM',
    description: 'ATM (Ataxia Telangiectasia Mutated) est une kinase qui détecte les dommages à l\'ADN et active les voies de réparation. Les mutations causent l\'ataxie-télangiectasie et augmentent le risque de cancer.',
    diseases: ['Ataxie-télangiectasie', 'Leucémie', 'Lymphome']
  },
  'CHEK2': {
    name: 'CHEK2',
    description: 'CHEK2 (Checkpoint Kinase 2) est une kinase de point de contrôle qui arrête le cycle cellulaire en réponse aux dommages à l\'ADN.',
    diseases: ['Cancer du sein', 'Cancer colorectal', 'Ostéosarcome']
  },
  'PALB2': {
    name: 'PALB2',
    description: 'PALB2 (Partner and Localizer of BRCA2) interagit avec BRCA2 pour la réparation de l\'ADN et maintient la stabilité génomique.',
    diseases: ['Cancer du sein', 'Cancer du pancréas']
  },
  'RB1': {
    name: 'RB1',
    description: 'RB1 (RB Transcriptional Corepressor 1) est un suppresseur de tumeur qui régule la transition G1/S du cycle cellulaire.',
    diseases: ['Rétinoblastome', 'Cancer du poumon', 'Cancer de la vessie']
  },
  'PTEN': {
    name: 'PTEN',
    description: 'PTEN (Phosphatase and Tensin Homolog) est un suppresseur de tumeur qui régule négativement la voie PI3K/AKT en déphosphorylant les lipides.',
    diseases: ['Syndrome de Cowden', 'Cancer de la prostate', 'Cancer de l\'endomètre', 'Glioblastome']
  },
  'CDKN2A': {
    name: 'CDKN2A',
    description: 'CDKN2A (Cyclin Dependent Kinase Inhibitor 2A) code pour p16INK4a et p14ARF, deux suppresseurs de tumeur qui régulent le cycle cellulaire.',
    diseases: ['Mélanome', 'Cancer du pancréas', 'Cancer du poumon']
  },
  'NF1': {
    name: 'NF1',
    description: 'NF1 (Neurofibromin 1) est un suppresseur de tumeur qui régule négativement la signalisation RAS et est muté dans la neurofibromatose de type 1.',
    diseases: ['Neurofibromatose type 1', 'Gliome', 'Phéochromocytome']
  },
  'VHL': {
    name: 'VHL',
    description: 'VHL (Von Hippel-Lindau Tumor Suppressor) est un suppresseur de tumeur qui régule l\'angiogenèse et l\'hypoxie. Muté dans le syndrome de von Hippel-Lindau.',
    diseases: ['Syndrome de von Hippel-Lindau', 'Cancer du rein', 'Hémangioblastome']
  },
  'STK11': {
    name: 'STK11',
    description: 'STK11 (Serine/Threonine Kinase 11), aussi appelé LKB1, est un suppresseur de tumeur qui régule le métabolisme énergétique et la polarité cellulaire.',
    diseases: ['Syndrome de Peutz-Jeghers', 'Cancer du poumon', 'Cancer du sein']
  },

  // Proto-oncogènes et kinases
  'EGFR': {
    name: 'EGFR',
    description: 'EGFR (Epidermal Growth Factor Receptor) est impliqué dans la croissance cellulaire et est souvent surexprimé dans plusieurs types de cancers. Il transmet des signaux qui favorisent la prolifération cellulaire.',
    diseases: ['Cancer du poumon non à petites cellules', 'Cancer colorectal', 'Cancer de la tête et du cou']
  },
  'ERBB2': {
    name: 'ERBB2',
    description: 'ERBB2 (Erythroblastic Leukemia Viral Oncogene Homolog 2), également connu sous le nom de HER2, est un récepteur qui, lorsqu\'il est surexprimé, est associé à des formes agressives de cancer du sein. Il favorise la croissance et la division cellulaire.',
    diseases: ['Cancer du sein HER2+', 'Cancer de l\'estomac']
  },
  'KRAS': {
    name: 'KRAS',
    description: 'KRAS (KRAS Proto-Oncogene, GTPase) est une petite protéine G qui transmet les signaux de croissance. Les mutations activatrices sont très fréquentes dans les cancers.',
    diseases: ['Cancer colorectal', 'Cancer du pancréas', 'Cancer du poumon']
  },
  'NRAS': {
    name: 'NRAS',
    description: 'NRAS (NRAS Proto-Oncogene, GTPase) est similaire à KRAS et muté dans plusieurs cancers, notamment les mélanomes.',
    diseases: ['Mélanome', 'Leucémie myéloïde', 'Cancer colorectal']
  },
  'BRAF': {
    name: 'BRAF',
    description: 'BRAF (B-Raf Proto-Oncogene, Serine/Threonine Kinase) est une kinase qui fait partie de la voie MAPK. La mutation V600E est fréquente dans les mélanomes.',
    diseases: ['Mélanome', 'Cancer colorectal', 'Cancer de la thyroïde']
  },
  'PIK3CA': {
    name: 'PIK3CA',
    description: 'PIK3CA (Phosphatidylinositol-4,5-Bisphosphate 3-Kinase Catalytic Subunit Alpha) code pour la sous-unité catalytique de PI3K, fréquemment mutée dans les cancers.',
    diseases: ['Cancer du sein', 'Cancer colorectal', 'Cancer de l\'endomètre']
  },
  'MYC': {
    name: 'MYC',
    description: 'MYC (MYC Proto-Oncogene, BHLH Transcription Factor) est un facteur de transcription qui régule l\'expression de nombreux gènes impliqués dans la croissance cellulaire.',
    diseases: ['Lymphome de Burkitt', 'Leucémie', 'Cancer du poumon']
  },
  'ALK': {
    name: 'ALK',
    description: 'ALK (ALK Receptor Tyrosine Kinase) est une kinase de récepteur qui peut être réarrangée ou amplifiée dans plusieurs cancers.',
    diseases: ['Cancer du poumon', 'Lymphome anaplasique', 'Neuroblastome']
  },
  'MET': {
    name: 'MET',
    description: 'MET (MET Proto-Oncogene, Receptor Tyrosine Kinase) est le récepteur pour le facteur de croissance hépatocytaire (HGF) et est impliqué dans la migration et l\'invasion cellulaire.',
    diseases: ['Cancer du poumon', 'Cancer du rein', 'Cancer gastrique']
  },
  'FGFR2': {
    name: 'FGFR2',
    description: 'FGFR2 (Fibroblast Growth Factor Receptor 2) est un récepteur pour les facteurs de croissance des fibroblastes, muté dans plusieurs cancers.',
    diseases: ['Cancer de l\'endomètre', 'Cancer gastrique', 'Cancer colorectal']
  },
  'FGFR3': {
    name: 'FGFR3',
    description: 'FGFR3 (Fibroblast Growth Factor Receptor 3) est impliqué dans la croissance osseuse et muté dans les cancers de la vessie et les myélomes.',
    diseases: ['Cancer de la vessie', 'Myélome multiple', 'Achondroplasie']
  },
  'KIT': {
    name: 'KIT',
    description: 'KIT (KIT Proto-Oncogene, Receptor Tyrosine Kinase) est le récepteur pour le facteur de croissance des cellules souches (SCF).',
    diseases: ['Tumeur stromale gastro-intestinale', 'Leucémie', 'Mélanome']
  },
  'PDGFRA': {
    name: 'PDGFRA',
    description: 'PDGFRA (Platelet Derived Growth Factor Receptor Alpha) est un récepteur pour les facteurs de croissance dérivés des plaquettes.',
    diseases: ['Tumeur stromale gastro-intestinale', 'Gliome']
  },
  'RET': {
    name: 'RET',
    description: 'RET (RET Proto-Oncogene) est un récepteur tyrosine kinase impliqué dans le développement des cellules nerveuses. Muté dans les cancers de la thyroïde.',
    diseases: ['Cancer médullaire de la thyroïde', 'Cancer papillaire de la thyroïde']
  },
  'ROS1': {
    name: 'ROS1',
    description: 'ROS1 (ROS Proto-Oncogene 1, Receptor Tyrosine Kinase) est une kinase qui peut être réarrangée dans les cancers du poumon.',
    diseases: ['Cancer du poumon non à petites cellules']
  },
  'NTRK1': {
    name: 'NTRK1',
    description: 'NTRK1 (Neurotrophic Receptor Tyrosine Kinase 1) code pour TrkA, un récepteur pour les facteurs neurotrophiques.',
    diseases: ['Cancer de la thyroïde', 'Fibrosarcome', 'Cancer colorectal']
  },
  'FLT3': {
    name: 'FLT3',
    description: 'FLT3 (Fms Related Receptor Tyrosine Kinase 3) est une kinase mutée dans les leucémies aiguës myéloïdes.',
    diseases: ['Leucémie myéloïde aiguë']
  },
  'JAK2': {
    name: 'JAK2',
    description: 'JAK2 (Janus Kinase 2) est une kinase impliquée dans la signalisation des cytokines. La mutation V617F est fréquente dans les néoplasmes myéloprolifératifs.',
    diseases: ['Polyglobulie vraie', 'Thrombocytémie essentielle', 'Myélofibrose']
  },
  'ABL1': {
    name: 'ABL1',
    description: 'ABL1 (ABL Proto-Oncogene 1, Non-Receptor Tyrosine Kinase) peut former le gène de fusion BCR-ABL dans la leucémie myéloïde chronique.',
    diseases: ['Leucémie myéloïde chronique', 'Leucémie aiguë lymphoblastique']
  },

  // Récepteurs et angiogenèse
  'KDR': {
    name: 'KDR',
    description: 'KDR (Kinase Insert Domain Receptor), également connu sous le nom de VEGFR2, joue un rôle clé dans l\'angiogenèse et est une cible importante pour les thérapies anticancéreuses. Il régule la formation de nouveaux vaisseaux sanguins nécessaires à la croissance tumorale.',
    diseases: ['Cancer du rein', 'Cancer colorectal', 'Cancer du foie']
  },
  'VEGFA': {
    name: 'VEGFA',
    description: 'VEGFA (Vascular Endothelial Growth Factor A) est le principal facteur de croissance vasculaire qui stimule l\'angiogenèse.',
    diseases: ['Cancer du rein', 'Rétinopathie', 'Maculopathie']
  },
  'FLT1': {
    name: 'FLT1',
    description: 'FLT1 (Fms Related Receptor Tyrosine Kinase 1), aussi appelé VEGFR1, est un récepteur pour les facteurs de croissance vasculaire.',
    diseases: ['Cancer du rein', 'Cancer du poumon']
  },
  'FLT4': {
    name: 'FLT4',
    description: 'FLT4 (Fms Related Receptor Tyrosine Kinase 4), aussi appelé VEGFR3, est impliqué dans le développement lymphatique.',
    diseases: ['Cancer du sein', 'Lymphœdème']
  },

  // Immunothérapie
  'PDCD1': {
    name: 'PDCD1',
    description: 'PDCD1 (Programmed Cell Death 1), également connu sous le nom de PD-1, est une protéine qui inhibe la réponse immunitaire et est une cible majeure en immunothérapie contre le cancer. Les inhibiteurs de PD-1 permettent au système immunitaire d\'attaquer les cellules cancéreuses.',
    diseases: ['Mélanome', 'Cancer du poumon', 'Cancer du rein', 'Lymphome']
  },
  'CTLA4': {
    name: 'CTLA4',
    description: 'CTLA4 (Cytotoxic T-Lymphocyte Associated Protein 4) est un récepteur inhibiteur exprimé sur les lymphocytes T qui régule négativement la réponse immunitaire.',
    diseases: ['Mélanome', 'Cancer du poumon', 'Auto-immunité']
  },
  'CD274': {
    name: 'CD274',
    description: 'CD274 (CD274 Molecule), également appelé PD-L1, est le ligand pour PD-1 et supprime la réponse immunitaire.',
    diseases: ['Mélanome', 'Cancer du poumon', 'Lymphome']
  },
  'PDCD1LG2': {
    name: 'PDCD1LG2',
    description: 'PDCD1LG2 (Programmed Cell Death 1 Ligand 2), aussi appelé PD-L2, est un autre ligand pour PD-1.',
    diseases: ['Cancer du poumon', 'Lymphome']
  },
  'LAG3': {
    name: 'LAG3',
    description: 'LAG3 (Lymphocyte Activating 3) est un récepteur inhibiteur exprimé sur les lymphocytes T activés.',
    diseases: ['Mélanome', 'Cancer du poumon']
  },
  'TIGIT': {
    name: 'TIGIT',
    description: 'TIGIT (T Cell Immunoreceptor With Ig And ITIM Domains) est un récepteur inhibiteur qui supprime les réponses des cellules T et NK.',
    diseases: ['Mélanome', 'Cancer du poumon']
  },

  // Facteurs de transcription
  'STAT3': {
    name: 'STAT3',
    description: 'STAT3 (Signal Transducer and Activator of Transcription 3) est un facteur de transcription activé par les cytokines et impliqué dans la survie cellulaire.',
    diseases: ['Cancer du poumon', 'Cancer colorectal', 'Myélome multiple']
  },
  'STAT5A': {
    name: 'STAT5A',
    description: 'STAT5A (Signal Transducer and Activator of Transcription 5A) régule l\'expression de gènes impliqués dans la croissance et la différenciation.',
    diseases: ['Leucémie', 'Cancer du sein']
  },
  'NFKB1': {
    name: 'NFKB1',
    description: 'NFKB1 (Nuclear Factor Kappa B Subunit 1) est un facteur de transcription qui régule l\'inflammation et la survie cellulaire.',
    diseases: ['Lymphome', 'Leucémie', 'Cancer colorectal']
  },
  'MYCN': {
    name: 'MYCN',
    description: 'MYCN (MYCN Proto-Oncogene, BHLH Transcription Factor) est un facteur de transcription de la famille MYC, amplifié dans les neuroblastomes.',
    diseases: ['Neuroblastome', 'Rétinoblastome']
  },
  'TERT': {
    name: 'TERT',
    description: 'TERT (Telomerase Reverse Transcriptase) code pour la sous-unité catalytique de la télomérase, qui maintient les télomères et est activée dans de nombreux cancers.',
    diseases: ['Mélanome', 'Cancer de la vessie', 'Cancer du foie']
  },

  // Réparation de l'ADN
  'PARP1': {
    name: 'PARP1',
    description: 'PARP1 (Poly(ADP-Ribose) Polymerase 1) répare les cassures simple-brin de l\'ADN et est une cible pour les inhibiteurs PARP dans les cancers BRCA-mutés.',
    diseases: ['Cancer du sein', 'Cancer des ovaires']
  },
  'MSH2': {
    name: 'MSH2',
    description: 'MSH2 (MutS Homolog 2) est impliqué dans la réparation des mésappariements de l\'ADN. Muté dans le syndrome de Lynch.',
    diseases: ['Syndrome de Lynch', 'Cancer colorectal', 'Cancer de l\'endomètre']
  },
  'MLH1': {
    name: 'MLH1',
    description: 'MLH1 (MutL Homolog 1) travaille avec MSH2 pour réparer les mésappariements de l\'ADN.',
    diseases: ['Syndrome de Lynch', 'Cancer colorectal']
  },
  'MSH6': {
    name: 'MSH6',
    description: 'MSH6 (MutS Homolog 6) est une autre protéine du système de réparation des mésappariements.',
    diseases: ['Syndrome de Lynch', 'Cancer colorectal']
  },
  'PMS2': {
    name: 'PMS2',
    description: 'PMS2 (PMS1 Homolog 2, Mismatch Repair System Component) fait partie du complexe de réparation des mésappariements.',
    diseases: ['Syndrome de Lynch', 'Cancer colorectal']
  },
  'BRIP1': {
    name: 'BRIP1',
    description: 'BRIP1 (BRCA1 Interacting Protein C-Terminal Helicase 1) interagit avec BRCA1 et est impliqué dans la réparation de l\'ADN.',
    diseases: ['Cancer du sein', 'Cancer des ovaires']
  },
  'RAD51': {
    name: 'RAD51',
    description: 'RAD51 (RAD51 Recombinase) est une recombinase qui médie la réparation des cassures double-brin de l\'ADN par recombinaison homologue.',
    diseases: ['Cancer du sein', 'Syndrome de prédisposition au cancer']
  },
  'FANCA': {
    name: 'FANCA',
    description: 'FANCA (FA Complementation Group A) fait partie du complexe Fanconi qui répare les pontages interbrins de l\'ADN.',
    diseases: ['Anémie de Fanconi', 'Leucémie', 'Cancer du sein']
  },
  'XRCC1': {
    name: 'XRCC1',
    description: 'XRCC1 (X-Ray Repair Cross Complementing 1) est impliqué dans la réparation par excision de bases.',
    diseases: ['Cancer du poumon', 'Cancer colorectal']
  },

  // Hormones et récepteurs nucléaires
  'ESR1': {
    name: 'ESR1',
    description: 'ESR1 (Estrogen Receptor 1) est le récepteur aux œstrogènes alpha, cible importante dans le cancer du sein hormono-dépendant.',
    diseases: ['Cancer du sein', 'Cancer de l\'endomètre']
  },
  'ESR2': {
    name: 'ESR2',
    description: 'ESR2 (Estrogen Receptor 2) est le récepteur aux œstrogènes bêta.',
    diseases: ['Cancer du sein', 'Cancer de la prostate']
  },
  'AR': {
    name: 'AR',
    description: 'AR (Androgen Receptor) est le récepteur aux androgènes, cible dans le cancer de la prostate.',
    diseases: ['Cancer de la prostate', 'Cancer du sein']
  },
  'PGR': {
    name: 'PGR',
    description: 'PGR (Progesterone Receptor) est le récepteur à la progestérone, exprimé dans de nombreux cancers du sein.',
    diseases: ['Cancer du sein', 'Cancer de l\'endomètre']
  },
  'VDR': {
    name: 'VDR',
    description: 'VDR (Vitamin D Receptor) est le récepteur à la vitamine D, qui peut avoir des effets protecteurs contre certains cancers.',
    diseases: ['Cancer colorectal', 'Cancer du sein']
  },

  // Voie PI3K/AKT/mTOR
  'AKT1': {
    name: 'AKT1',
    description: 'AKT1 (AKT Serine/Threonine Kinase 1) est une kinase centrale de la voie PI3K/AKT qui régule la survie et la croissance cellulaire.',
    diseases: ['Cancer du sein', 'Cancer colorectal', 'Syndrome de Cowden']
  },
  'AKT2': {
    name: 'AKT2',
    description: 'AKT2 (AKT Serine/Threonine Kinase 2) est une isoforme d\'AKT impliquée dans le métabolisme du glucose et la croissance cellulaire.',
    diseases: ['Cancer de l\'ovaire', 'Cancer du pancréas']
  },
  'MTOR': {
    name: 'MTOR',
    description: 'MTOR (Mechanistic Target Of Rapamycin Kinase) est une kinase qui régule la croissance cellulaire, le métabolisme et l\'autophagie.',
    diseases: ['Cancer du rein', 'Cancer du sein', 'Lymphome']
  },
  'TSC1': {
    name: 'TSC1',
    description: 'TSC1 (TSC Complex Subunit 1) forme un complexe avec TSC2 pour inhiber mTOR. Muté dans la sclérose tubéreuse.',
    diseases: ['Sclérose tubéreuse', 'Lymphangioléiomyomatose']
  },
  'TSC2': {
    name: 'TSC2',
    description: 'TSC2 (TSC Complex Subunit 2) travaille avec TSC1 pour réguler négativement mTOR.',
    diseases: ['Sclérose tubéreuse', 'Lymphangioléiomyomatose', 'Angiomyolipome']
  },

  // Apoptose
  'BCL2': {
    name: 'BCL2',
    description: 'BCL2 (BCL2 Apoptosis Regulator) est un régulateur de l\'apoptose qui inhibe la mort cellulaire programmée. Surexprimé dans plusieurs lymphomes.',
    diseases: ['Lymphome folliculaire', 'Leucémie lymphoïde chronique']
  },
  'BAX': {
    name: 'BAX',
    description: 'BAX (BCL2 Associated X, Apoptosis Regulator) favorise l\'apoptose en s\'opposant à BCL2.',
    diseases: ['Cancer colorectal', 'Cancer du sein']
  },
  'CASP3': {
    name: 'CASP3',
    description: 'CASP3 (Caspase 3) est une caspase effectrice qui exécute l\'apoptose.',
    diseases: ['Cancer du sein', 'Cancer colorectal']
  },
  'CASP8': {
    name: 'CASP8',
    description: 'CASP8 (Caspase 8) est une caspase initiatrice de l\'apoptose extrinsèque.',
    diseases: ['Cancer du sein', 'Leucémie']
  },
  'CASP9': {
    name: 'CASP9',
    description: 'CASP9 (Caspase 9) est une caspase initiatrice de l\'apoptose intrinsèque.',
    diseases: ['Cancer colorectal', 'Cancer du sein']
  },

  // Voie Wnt
  'CTNNB1': {
    name: 'CTNNB1',
    description: 'CTNNB1 (Catenin Beta 1), aussi appelé β-caténine, est un composant central de la voie Wnt qui régule la transcription.',
    diseases: ['Cancer colorectal', 'Hépatocarcinome', 'Cancer de l\'endomètre']
  },
  'GSK3B': {
    name: 'GSK3B',
    description: 'GSK3B (Glycogen Synthase Kinase 3 Beta) phosphoryle et dégrade la β-caténine dans la voie Wnt.',
    diseases: ['Cancer colorectal', 'Alzheimer']
  },
  'AXIN1': {
    name: 'AXIN1',
    description: 'AXIN1 (Axin 1) fait partie du complexe de destruction de β-caténine dans la voie Wnt.',
    diseases: ['Hépatocarcinome', 'Cancer colorectal']
  },
  'DKK1': {
    name: 'DKK1',
    description: 'DKK1 (Dickkopf WNT Signaling Pathway Inhibitor 1) est un inhibiteur de la voie Wnt.',
    diseases: ['Myélome multiple', 'Cancer du poumon']
  },

  // Voie Notch
  'NOTCH1': {
    name: 'NOTCH1',
    description: 'NOTCH1 (Notch Receptor 1) est un récepteur de la voie Notch qui régule la différenciation cellulaire.',
    diseases: ['Leucémie lymphoïde chronique', 'Cancer du sein', 'Cancer de la tête et du cou']
  },
  'NOTCH2': {
    name: 'NOTCH2',
    description: 'NOTCH2 (Notch Receptor 2) est impliqué dans le développement et peut être muté dans certains cancers.',
    diseases: ['Syndrome d\'Alagille', 'Cancer du sein']
  },
  'JAG1': {
    name: 'JAG1',
    description: 'JAG1 (Jagged Canonical Notch Ligand 1) est un ligand pour les récepteurs Notch.',
    diseases: ['Syndrome d\'Alagille', 'Cancer du sein']
  },
  'DLL3': {
    name: 'DLL3',
    description: 'DLL3 (Delta Like Canonical Notch Ligand 3) est un ligand Notch exprimé dans les petites cellules cancéreuses du poumon.',
    diseases: ['Cancer du poumon à petites cellules']
  },

  // Voie Hedgehog
  'PTCH1': {
    name: 'PTCH1',
    description: 'PTCH1 (Patched 1) est le récepteur principal de la voie Hedgehog. Muté dans le carcinome basocellulaire et le syndrome de Gorlin.',
    diseases: ['Carcinome basocellulaire', 'Syndrome de Gorlin', 'Médulloblastome']
  },
  'SMO': {
    name: 'SMO',
    description: 'SMO (Smoothened, Frizzled Class Receptor) transmet le signal Hedgehog. Ciblé par les inhibiteurs dans le carcinome basocellulaire.',
    diseases: ['Carcinome basocellulaire', 'Médulloblastome']
  },
  'GLI1': {
    name: 'GLI1',
    description: 'GLI1 (GLI Family Zinc Finger 1) est un facteur de transcription effecteur de la voie Hedgehog.',
    diseases: ['Médulloblastome', 'Carcinome basocellulaire']
  },

  // Voie TGF-β
  'TGFBR2': {
    name: 'TGFBR2',
    description: 'TGFBR2 (Transforming Growth Factor Beta Receptor 2) est le récepteur de type II pour TGF-β.',
    diseases: ['Cancer colorectal', 'Cancer du sein']
  },
  'SMAD4': {
    name: 'SMAD4',
    description: 'SMAD4 (SMAD Family Member 4) est un médiateur transcriptionnel de la voie TGF-β. Muté dans le cancer du pancréas.',
    diseases: ['Cancer du pancréas', 'Cancer colorectal', 'Syndrome de polypose juvénile']
  },
  'SMAD2': {
    name: 'SMAD2',
    description: 'SMAD2 (SMAD Family Member 2) transmet le signal TGF-β.',
    diseases: ['Cancer colorectal', 'Cancer du pancréas']
  },
  'SMAD3': {
    name: 'SMAD3',
    description: 'SMAD3 (SMAD Family Member 3) est impliqué dans la transduction du signal TGF-β.',
    diseases: ['Cancer colorectal']
  },

  // Autres kinases et enzymes
  'CDK4': {
    name: 'CDK4',
    description: 'CDK4 (Cyclin Dependent Kinase 4) régule la transition G1/S du cycle cellulaire.',
    diseases: ['Mélanome', 'Cancer du sein']
  },
  'CDK6': {
    name: 'CDK6',
    description: 'CDK6 (Cyclin Dependent Kinase 6) est similaire à CDK4 et régule le cycle cellulaire.',
    diseases: ['Leucémie', 'Cancer du sein']
  },
  'CDKN1A': {
    name: 'CDKN1A',
    description: 'CDKN1A (Cyclin Dependent Kinase Inhibitor 1A), aussi appelé p21, inhibe les CDK et arrête le cycle cellulaire.',
    diseases: ['Cancer colorectal', 'Cancer du sein']
  },
  'CDKN1B': {
    name: 'CDKN1B',
    description: 'CDKN1B (Cyclin Dependent Kinase Inhibitor 1B), aussi appelé p27, régule le cycle cellulaire.',
    diseases: ['Cancer du sein', 'Cancer colorectal']
  },
  'MDM2': {
    name: 'MDM2',
    description: 'MDM2 (MDM2 Proto-Oncogene) régule négativement TP53 en favorisant sa dégradation.',
    diseases: ['Sarcome', 'Cancer du poumon']
  },
  'MDM4': {
    name: 'MDM4',
    description: 'MDM4 (MDM4 Regulator of P53) inhibe également TP53.',
    diseases: ['Rétinoblastome', 'Cancer du sein']
  },
  'ARID1A': {
    name: 'ARID1A',
    description: 'ARID1A (AT-Rich Interaction Domain 1A) fait partie du complexe SWI/SNF qui remodèle la chromatine.',
    diseases: ['Cancer de l\'ovaire', 'Cancer de l\'endomètre', 'Cancer gastrique']
  },
  'ARID2': {
    name: 'ARID2',
    description: 'ARID2 (AT-Rich Interaction Domain 2) est également un composant du complexe SWI/SNF.',
    diseases: ['Cancer du foie', 'Mélanome']
  },
  'IDH1': {
    name: 'IDH1',
    description: 'IDH1 (Isocitrate Dehydrogenase 1) est une enzyme métabolique mutée dans les gliomes et les leucémies.',
    diseases: ['Gliome', 'Leucémie myéloïde aiguë', 'Chondrosarcome']
  },
  'IDH2': {
    name: 'IDH2',
    description: 'IDH2 (Isocitrate Dehydrogenase 2) est similaire à IDH1 et mutée dans les cancers hématologiques.',
    diseases: ['Leucémie myéloïde aiguë', 'Angiocentome']
  },
  'DNMT3A': {
    name: 'DNMT3A',
    description: 'DNMT3A (DNA Methyltransferase 3 Alpha) est une ADN méthyltransférase mutée dans les leucémies.',
    diseases: ['Leucémie myéloïde aiguë', 'Leucémie lymphoïde chronique']
  },
  'TET2': {
    name: 'TET2',
    description: 'TET2 (Tet Methylcytosine Dioxygenase 2) déméthyle l\'ADN et est muté dans les syndromes myélodysplasiques.',
    diseases: ['Syndrome myélodysplasique', 'Leucémie myéloïde aiguë']
  },
  'ASXL1': {
    name: 'ASXL1',
    description: 'ASXL1 (ASXL Transcriptional Regulator 1) régule la transcription et est muté dans les syndromes myélodysplasiques.',
    diseases: ['Syndrome myélodysplasique', 'Leucémie myéloïde aiguë']
  },
  'EZH2': {
    name: 'EZH2',
    description: 'EZH2 (Enhancer Of Zeste 2 Polycomb Repressive Complex 2 Subunit) est une histone méthyltransférase mutée dans les lymphomes.',
    diseases: ['Lymphome folliculaire', 'Lymphome diffus à grandes cellules B']
  },
  'KMT2A': {
    name: 'KMT2A',
    description: 'KMT2A (Lysine Methyltransferase 2A), aussi appelé MLL, est souvent réarrangé dans les leucémies infantiles.',
    diseases: ['Leucémie aiguë', 'Syndrome de Wiedemann-Steiner']
  },
  'KDM6A': {
    name: 'KDM6A',
    description: 'KDM6A (Lysine Demethylase 6A) déméthyle les histones et est muté dans certains cancers.',
    diseases: ['Cancer de la vessie', 'Cancer du rein']
  },

  // Transporteurs et canaux
  'ABCB1': {
    name: 'ABCB1',
    description: 'ABCB1 (ATP Binding Cassette Subfamily B Member 1), aussi appelé P-glycoprotéine ou MDR1, est un transporteur qui peut conférer une résistance aux médicaments.',
    diseases: ['Résistance aux chimiothérapies', 'Cancer colorectal']
  },
  'ABCC1': {
    name: 'ABCC1',
    description: 'ABCC1 (ATP Binding Cassette Subfamily C Member 1), aussi appelé MRP1, est impliqué dans la résistance aux médicaments.',
    diseases: ['Résistance aux chimiothérapies']
  },
  'ABCG2': {
    name: 'ABCG2',
    description: 'ABCG2 (ATP Binding Cassette Subfamily G Member 2), aussi appelé BCRP, peut conférer une résistance aux médicaments.',
    diseases: ['Résistance aux chimiothérapies', 'Cancer du sein']
  }
}

// Liste des gènes disponibles
export const genes = Object.keys(genesStaticData)
