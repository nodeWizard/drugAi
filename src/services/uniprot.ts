import axios from 'axios'

// Interfaces pour les données UniProt
export interface UniProtEntry {
  primaryAccession: string
  uniProtkbId?: string
  geneNames?: Array<{
    geneName?: {
      value: string
    }
  }>
  proteinDescription?: {
    recommendedName?: {
      fullName?: {
        value: string
      }
    }
    alternativeNames?: Array<{
      fullName?: {
        value: string
      }
    }>
  }
  comments?: Array<{
    commentType: string
    texts?: Array<{
      value: string
    }>
    function?: Array<{
      text?: {
        value: string
      }
    }>
    disease?: Array<{
      diseaseId?: string
      diseaseName?: string
    }>
  }>
  sequence?: {
    value: string
    length: number
  }
  organism?: {
    scientificName: string
    commonName?: string
  }
  annotationScore?: number
  features?: Array<{
    type: string
    description?: string
  }>
  [key: string]: unknown // Permet d'accepter d'autres champs de l'API
}

export interface UniProtSearchResponse {
  results: UniProtEntry[]
  totalResults: number
}

export interface GeneProteinInfo {
  geneName: string
  primaryIsoform: UniProtEntry | null
  isoforms: UniProtEntry[]
}

/**
 * Recherche les protéines associées à un gène dans UniProt
 */
export async function searchGeneProteins(geneName: string): Promise<GeneProteinInfo> {
  try {
    const query = `gene:${geneName} AND reviewed:true AND organism_id:9606`
    const url = `https://rest.uniprot.org/uniprotkb/search?query=${encodeURIComponent(query)}&format=json&size=100`
    
    console.log('🔍 Recherche UniProt pour:', geneName, 'URL:', url)
    
    const response = await axios.get(url)
    const data = response.data
    console.log('📦 Réponse UniProt:', data)
    
    // L'API UniProt peut retourner des résultats directement ou dans un objet
    const results = data.results || data || []
    
    if (!results || (Array.isArray(results) && results.length === 0)) {
      console.warn('⚠️ Aucun résultat trouvé pour', geneName)
      return {
        geneName,
        primaryIsoform: null,
        isoforms: []
      }
    }
    
    // S'assurer que results est un tableau
    const resultsArray = Array.isArray(results) ? results : [results]

    // Trier les résultats : l'isoforme principale est généralement celle avec le score d'annotation le plus élevé
    // ou la première dans la liste (souvent l'accession principale)
    const sortedResults = [...resultsArray].sort((a, b) => {
      // Prioriser celles avec un score d'annotation plus élevé
      const scoreA = a.annotationScore || 0
      const scoreB = b.annotationScore || 0
      if (scoreB !== scoreA) return scoreB - scoreA
      
      // Si les scores sont égaux, prioriser l'accession principale (souvent plus courte)
      if (a?.primaryAccession && b?.primaryAccession) {
        return a.primaryAccession.localeCompare(b.primaryAccession)
      }
      return 0
    })

    // Vérifier que chaque résultat a au moins primaryAccession
    const validResults = sortedResults.filter(r => r && r.primaryAccession)
    
    if (validResults.length === 0) {
      console.warn('⚠️ Aucun résultat valide avec primaryAccession trouvé')
      return {
        geneName,
        primaryIsoform: null,
        isoforms: []
      }
    }
    
    const primaryIsoform = validResults[0] || null
    const isoforms = validResults

    console.log('✅ Résultats trouvés:', isoforms.length, 'isoformes, principale:', primaryIsoform?.primaryAccession)

    return {
      geneName,
      primaryIsoform,
      isoforms
    }
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des données UniProt:', error)
    if (axios.isAxiosError(error)) {
      console.error(`Statut: ${error.response?.status}, Message: ${error.message}`)
    }
    return {
      geneName,
      primaryIsoform: null,
      isoforms: []
    }
  }
}

/**
 * Récupère les informations détaillées d'une protéine par son UniProt ID
 */
export async function getProteinDetails(uniprotId: string): Promise<UniProtEntry | null> {
  try {
    const url = `https://rest.uniprot.org/uniprotkb/${uniprotId}.json`
    
    const response = await axios.get<UniProtEntry>(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de la protéine:', error)
    if (axios.isAxiosError(error)) {
      console.error(`Statut: ${error.response?.status}, Message: ${error.message}`)
    }
    return null
  }
}

/**
 * Extrait la fonction biologique depuis les commentaires UniProt
 */
export function extractFunction(entry: UniProtEntry | null): string {
  if (!entry?.comments) return ''
  
  const functionComment = entry.comments.find(c => c.commentType === 'FUNCTION')
  if (!functionComment) return ''
  
  // Vérifier si function est un tableau
  if (functionComment.function) {
    const functionArray = Array.isArray(functionComment.function)
      ? functionComment.function
      : [functionComment.function]
    
    const functionTexts = functionArray
      .map(f => (f && typeof f === 'object' && 'text' in f && f.text?.value) || '')
      .filter(Boolean)
    
    if (functionTexts.length > 0) {
      return functionTexts.join(' ')
    }
  }
  
  // Vérifier texts
  if (functionComment.texts && Array.isArray(functionComment.texts)) {
    return functionComment.texts
      .map(t => (t && typeof t === 'object' && 'value' in t ? t.value : ''))
      .filter(Boolean)
      .join(' ')
  }
  
  return ''
}

/**
 * Extrait les maladies associées depuis les commentaires UniProt
 */
export function extractDiseases(entry: UniProtEntry | null): string[] {
  if (!entry?.comments) return []
  
  const diseaseComments = entry.comments.filter(c => c.commentType === 'DISEASE')
  const diseases: string[] = []
  
  diseaseComments.forEach(comment => {
    if (comment.disease) {
      // La structure peut être un tableau ou un objet unique
      const diseaseArray = Array.isArray(comment.disease) 
        ? comment.disease 
        : [comment.disease]
      
      diseaseArray.forEach((d: { diseaseName?: string; diseaseId?: string }) => {
        if (d?.diseaseName) {
          diseases.push(d.diseaseName)
        }
      })
    }
    
    // Vérifier aussi si les maladies sont dans texts
    if (comment.texts && Array.isArray(comment.texts)) {
      comment.texts.forEach(text => {
        if (text.value && typeof text.value === 'string') {
          // Extraire le nom de la maladie du texte
          const diseaseMatch = text.value.match(/Disease:\s*(.+?)(?:\n|$)/i)
          if (diseaseMatch && diseaseMatch[1]) {
            diseases.push(diseaseMatch[1].trim())
          }
        }
      })
    }
  })
  
  return [...new Set(diseases)] // Supprime les doublons
}

/**
 * Récupère le nom complet de la protéine
 */
export function getProteinFullName(entry: UniProtEntry | null): string {
  if (!entry) return ''
  
  const recommendedName = entry.proteinDescription?.recommendedName?.fullName?.value
  if (recommendedName) return recommendedName
  
  const alternativeName = entry.proteinDescription?.alternativeNames?.[0]?.fullName?.value
  if (alternativeName) return alternativeName
  
  return entry.uniProtkbId || entry.primaryAccession
}

/**
 * Extrait le nom du gène depuis une entrée UniProt
 */
export function extractGeneName(entry: UniProtEntry | null): string | null {
  if (!entry?.geneNames || !Array.isArray(entry.geneNames) || entry.geneNames.length === 0) {
    return null
  }

  // Essayer d'obtenir le nom du gène principal
  for (const geneNameEntry of entry.geneNames) {
    if (geneNameEntry?.geneName?.value) {
      return geneNameEntry.geneName.value
    }
  }

  return null
}

/**
 * Extrait la localisation subcellulaire depuis les commentaires UniProt
 */
export function extractSubcellularLocation(entry: UniProtEntry | null): string[] {
  if (!entry?.comments) return []
  
  const locationComments = entry.comments.filter(c => c.commentType === 'SUBCELLULAR_LOCATION')
  const locations: string[] = []
  
  locationComments.forEach(comment => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subcellularLocations = (comment as any).subcellularLocations
    if (subcellularLocations && Array.isArray(subcellularLocations)) {
      subcellularLocations.forEach((location: any) => {
        if (location.location?.value) {
          locations.push(location.location.value)
        }
      })
    }
    
    // Vérifier aussi dans texts
    if (comment.texts && Array.isArray(comment.texts)) {
      comment.texts.forEach(text => {
        if (text.value && typeof text.value === 'string') {
          const locationMatch = text.value.match(/^([^;]+)/)
          if (locationMatch && locationMatch[1]) {
            locations.push(locationMatch[1].trim())
          }
        }
      })
    }
  })
  
  return [...new Set(locations)] // Supprime les doublons
}

/**
 * Extrait les domaines et régions fonctionnelles depuis les features UniProt
 */
export function extractDomainsAndFeatures(entry: UniProtEntry | null): Array<{ type: string; description?: string; location?: string }> {
  if (!entry?.features) return []
  
  const importantFeatures = ['domain', 'region', 'repeat', 'motif', 'binding site', 'active site', 'transmembrane region']
  
  return entry.features
    .filter(feature => feature.type && importantFeatures.some(imp => feature.type.toLowerCase().includes(imp.toLowerCase())))
    .map(feature => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const location = (feature as any).location
      let locationStr = ''
      if (location?.start?.value && location?.end?.value) {
        locationStr = `${location.start.value}-${location.end.value}`
      }
      
      return {
        type: feature.type || '',
        description: feature.description || '',
        location: locationStr
      }
    })
    .slice(0, 20) // Limiter à 20 features pour ne pas surcharger
}

/**
 * Calcule la masse moléculaire approximative à partir de la séquence
 */
export function calculateMolecularWeight(sequence: { value: string; length: number } | null): number | null {
  if (!sequence?.value) return null
  
  // Masses des acides aminés en Da
  const aaMasses: Record<string, number> = {
    'A': 71.08, 'R': 156.19, 'N': 114.11, 'D': 115.09, 'C': 103.14,
    'E': 129.12, 'Q': 128.14, 'G': 57.05, 'H': 137.14, 'I': 113.16,
    'L': 113.16, 'K': 128.17, 'M': 131.20, 'F': 147.18, 'P': 97.12,
    'S': 87.08, 'T': 101.11, 'W': 186.22, 'Y': 163.18, 'V': 99.13
  }
  
  let totalMass = 18.02 // Masse de l'eau (H2O) pour la chaîne complète
  
  for (const aa of sequence.value) {
    if (aaMasses[aa.toUpperCase()]) {
      totalMass += aaMasses[aa.toUpperCase()]
    }
  }
  
  return Math.round(totalMass * 10) / 10 // Arrondir à 1 décimale
}

/**
 * Extrait les noms alternatifs de la protéine
 */
export function extractAlternativeNames(entry: UniProtEntry | null): string[] {
  if (!entry?.proteinDescription?.alternativeNames) return []
  
  return entry.proteinDescription.alternativeNames
    .map(alt => alt.fullName?.value)
    .filter((name): name is string => !!name)
}

