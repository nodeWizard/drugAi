import axios from 'axios'

export interface GeneSearchResult {
  geneName: string
  description: string
  uniprotId?: string
}

/**
 * Recherche des gènes par nom en utilisant l'API UniProt
 * Retourne une liste de suggestions pour l'autocomplétion
 */
export async function searchGenes(query: string): Promise<GeneSearchResult[]> {
  if (!query || query.length < 2) {
    return []
  }

  try {
    // Rechercher dans UniProt avec un filtre pour les gènes humains
    const searchQuery = `gene:${query}* AND reviewed:true AND organism_id:9606`
    const url = `https://rest.uniprot.org/uniprotkb/search?query=${encodeURIComponent(searchQuery)}&format=json&size=10&fields=accession,id,gene_names,protein_name`

    const response = await axios.get(url)
    const data = response.data
    console.log("🚀 ~ searchGenes ~ data:", data)

    if (!data.results || data.results.length === 0) {
      return []
    }

    // Extraire les noms de gènes uniques des résultats
    const geneMap = new Map<string, GeneSearchResult>()

    const queryUpper = query.toUpperCase()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.results.forEach((entry: any) => {
      // La structure de l'API utilise 'genes' (pas 'geneNames')
      const genes = entry.genes || []
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      genes.forEach((geneEntry: any) => {
        if (geneEntry?.geneName?.value) {
          const geneName = geneEntry.geneName.value.toUpperCase()
          
          // Ne garder que les résultats qui commencent par la requête
          if (geneName.startsWith(queryUpper)) {
            if (!geneMap.has(geneName)) {
              // Extraire la description de la protéine
              const description = 
                entry.proteinDescription?.recommendedName?.fullName?.value || 
                entry.proteinDescription?.alternativeNames?.[0]?.fullName?.value ||
                entry.proteinDescription?.submissionNames?.[0]?.fullName?.value ||
                'Description non disponible'

              geneMap.set(geneName, {
                geneName: geneName,
                description: description,
                uniprotId: entry.primaryAccession
              })
            }
          }
        }
        
        // Aussi vérifier les synonymes
        if (geneEntry?.synonyms && Array.isArray(geneEntry.synonyms)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geneEntry.synonyms.forEach((synonym: any) => {
            if (synonym?.value) {
              const synonymUpper = synonym.value.toUpperCase()
              if (synonymUpper.startsWith(queryUpper) && !geneMap.has(synonymUpper)) {
                const description = 
                  entry.proteinDescription?.recommendedName?.fullName?.value || 
                  entry.proteinDescription?.alternativeNames?.[0]?.fullName?.value ||
                  'Description non disponible'

                geneMap.set(synonymUpper, {
                  geneName: synonymUpper,
                  description: description,
                  uniprotId: entry.primaryAccession
                })
              }
            }
          })
        }
      })
    })

    // Convertir en tableau, trier par pertinence et limiter à 10 résultats
    const results = Array.from(geneMap.values())
      .sort((a, b) => {
        // Prioriser les résultats qui commencent exactement par la requête
        const aStarts = a.geneName === queryUpper ? 1 : 0
        const bStarts = b.geneName === queryUpper ? 1 : 0
        return bStarts - aStarts
      })
      .slice(0, 10)

    console.log('✅ Gènes trouvés:', results)
    return results
  } catch (error) {
    console.error('Erreur lors de la recherche de gènes:', error)
    if (axios.isAxiosError(error)) {
      console.error(`Statut: ${error.response?.status}, Message: ${error.message}`)
    }
    return []
  }
}

/**
 * Recherche alternative utilisant NCBI Gene API pour une meilleure couverture
 */
export async function searchGenesNCBI(query: string): Promise<GeneSearchResult[]> {
  if (!query || query.length < 2) {
    return []
  }

  try {
    // Utiliser l'API E-utilities de NCBI
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene&term=${encodeURIComponent(query)}[Gene+Name]+AND+human[Organism]&retmode=json&retmax=10`

    const response = await axios.get(url)
    const data = response.data

    if (!data.esearchresult || !data.esearchresult.idlist) {
      return []
    }

    const geneIds = data.esearchresult.idlist
    if (geneIds.length === 0) {
      return []
    }

    // Récupérer les détails des gènes
    const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${geneIds.join(',')}&retmode=json`
    const summaryResponse = await axios.get(summaryUrl)
    const summaryData = summaryResponse.data

    const results: GeneSearchResult[] = []

    if (summaryData.result) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.values(summaryData.result).forEach((gene: any) => {
        if (gene.Name && gene.Name.toUpperCase().startsWith(query.toUpperCase())) {
          results.push({
            geneName: gene.Name.toUpperCase(),
            description: gene.description || gene.summary || 'Description non disponible'
          })
        }
      })
    }

    return results.slice(0, 10)
  } catch (error) {
    console.error('Erreur lors de la recherche NCBI:', error)
    return []
  }
}

