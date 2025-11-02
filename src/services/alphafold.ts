import axios from 'axios'

// Mapping des protéines vers leurs identifiants UniProt
export const proteinUniProtIds: Record<string, string> = {
  'BRCA1': 'P38398',
  'TP53': 'P04637',
  'EGFR': 'P00533',
  'VEGFR': 'P35968', // VEGFR2/KDR
  'HER2': 'P04626',
  'PD-1': 'Q15116'
}

// Interface pour les données AlphaFold
export interface AlphaFoldData {
  entryId: string
  modelEntityId: string
  gene: string
  uniprotAccession: string
  uniprotId: string
  uniprotDescription: string
  taxId: number
  organismScientificName: string
  globalMetricValue?: number
  fractionPlddtVeryLow?: number
  fractionPlddtLow?: number
  fractionPlddtConfident?: number
  fractionPlddtVeryHigh?: number
  sequence?: string
  sequenceStart?: number
  sequenceEnd?: number
  pdbUrl?: string
  bcifUrl?: string
  cifUrl?: string
}

/**
 * Récupère toutes les isoformes AlphaFold pour un UniProt ID (retourne un tableau de toutes les isoformes)
 */
export async function fetchAllAlphaFoldIsoforms(uniprotId: string): Promise<AlphaFoldData[]> {
  try {
    // Extraire l'ID de base (sans le numéro d'isoforme)
    const baseId = uniprotId.split('-')[0]
    const response = await axios.get<AlphaFoldData[]>(`https://alphafold.ebi.ac.uk/api/prediction/${baseId}`)
    const data = response.data
    
    // L'API retourne toujours un tableau d'isoformes
    if (Array.isArray(data) && data.length > 0) {
      return data as AlphaFoldData[]
    }
    
    return []
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Si 404, la structure n'existe pas dans AlphaFold
      if (error.response?.status === 404) {
        return []
      }
      console.error(`Erreur API AlphaFold: ${error.response?.status}`, error.message)
    } else {
      console.error('Erreur lors de la récupération des isoformes AlphaFold:', error)
    }
    return []
  }
}

/**
 * Récupère les données AlphaFold pour une protéine spécifique via son identifiant UniProt
 */
export async function fetchAlphaFoldData(uniprotId: string): Promise<AlphaFoldData | null> {
  try {
    const response = await axios.get<AlphaFoldData | AlphaFoldData[]>(`https://alphafold.ebi.ac.uk/api/prediction/${uniprotId}`)
    const data = response.data
    
    // L'API peut retourner un tableau ou un objet unique
    if (Array.isArray(data) && data.length > 0) {
      // Si c'est un tableau, chercher l'isoforme correspondant à l'ID demandé
      const matching = data.find((item: AlphaFoldData) => 
        item.uniprotAccession === uniprotId || item.modelEntityId.includes(uniprotId.replace('-', '-'))
      )
      return matching || data[0] || null
    } else if (data && typeof data === 'object' && !Array.isArray(data)) {
      return data as AlphaFoldData
    }
    
    return null
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Si 404, la structure n'existe pas dans AlphaFold
      if (error.response?.status === 404) {
        return null
      }
      console.error(`Erreur API AlphaFold: ${error.response?.status}`, error.message)
    } else {
      console.error('Erreur lors de la récupération des données AlphaFold:', error)
    }
    return null
  }
}


/**
 * Récupère l'URL de visualisation 3D pour une protéine
 */
export function getAlphaFoldViewerUrl(uniprotId: string): string {
  return `https://alphafold.ebi.ac.uk/entry/${uniprotId}`
}

/**
 * Récupère l'URL de la structure 3D (fichier PDB)
 */
export function getAlphaFoldPdbUrl(uniprotId: string): string {
  return `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v4.pdb`
}

