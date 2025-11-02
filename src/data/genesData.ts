// Données statiques des gènes avec descriptions et maladies associées
export interface GeneStaticData {
  name: string
  description: string
  diseases: string[]
}

export const genesStaticData: Record<string, GeneStaticData> = {
  'BRCA1': {
    name: 'BRCA1',
    description: 'BRCA1 (Breast Cancer 1) est une protéine de réparation de l\'ADN qui joue un rôle crucial dans la prévention du cancer du sein et des ovaires. Elle participe à la réparation des cassures double-brin de l\'ADN et maintient la stabilité génomique.',
    diseases: ['Cancer du sein', 'Cancer des ovaires', 'Cancer de la prostate']
  },
  'TP53': {
    name: 'TP53',
    description: 'TP53, également appelé "garde du génome", est une protéine suppresseur de tumeur qui régule le cycle cellulaire et déclenche l\'apoptose en cas de dommages à l\'ADN. Les mutations de TP53 sont présentes dans plus de 50% des cancers humains.',
    diseases: ['Cancer du poumon', 'Leucémie', 'Cancer colorectal', 'Cancer du sein']
  },
  'EGFR': {
    name: 'EGFR',
    description: 'EGFR (Epidermal Growth Factor Receptor) est impliqué dans la croissance cellulaire et est souvent surexprimé dans plusieurs types de cancers. Il transmet des signaux qui favorisent la prolifération cellulaire.',
    diseases: ['Cancer du poumon non à petites cellules', 'Cancer colorectal', 'Cancer de la tête et du cou']
  },
  'KDR': {
    name: 'KDR',
    description: 'KDR (Kinase Insert Domain Receptor), également connu sous le nom de VEGFR2, joue un rôle clé dans l\'angiogenèse et est une cible importante pour les thérapies anticancéreuses. Il régule la formation de nouveaux vaisseaux sanguins nécessaires à la croissance tumorale.',
    diseases: ['Cancer du rein', 'Cancer colorectal', 'Cancer du foie']
  },
  'ERBB2': {
    name: 'ERBB2',
    description: 'ERBB2 (Erythroblastic Leukemia Viral Oncogene Homolog 2), également connu sous le nom de HER2, est un récepteur qui, lorsqu\'il est surexprimé, est associé à des formes agressives de cancer du sein. Il favorise la croissance et la division cellulaire.',
    diseases: ['Cancer du sein HER2+', 'Cancer de l\'estomac']
  },
  'PDCD1': {
    name: 'PDCD1',
    description: 'PDCD1 (Programmed Cell Death 1), également connu sous le nom de PD-1, est une protéine qui inhibe la réponse immunitaire et est une cible majeure en immunothérapie contre le cancer. Les inhibiteurs de PD-1 permettent au système immunitaire d\'attaquer les cellules cancéreuses.',
    diseases: ['Mélanome', 'Cancer du poumon', 'Cancer du rein', 'Lymphome']
  }
}

// Liste des gènes disponibles
export const genes = Object.keys(genesStaticData)

