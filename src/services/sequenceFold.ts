import axios from 'axios'

export interface FoldResult {
  pdbText: string
}

/**
 * Appelle l'API ESMFold pour prédire la structure 3D à partir d'une séquence protéique.
 * Retourne le contenu PDB sous forme de texte. La pLDDT est encodée dans les B-factors.
 */
export async function foldSequenceToPdb(sequence: string, signal?: AbortSignal): Promise<FoldResult> {
  const seq = sequence.trim().toUpperCase()
  if (seq.length === 0) {
    throw new Error('La séquence est vide')
  }

  // ESMFold API publique (peut être sujette à des limites/rate limits)
  const url = 'https://api.esmatlas.com/foldSequence/v1/pdb/'

  const response = await axios.post<string>(url, seq, {
    headers: {
      'Content-Type': 'text/plain',
      'Accept': 'chemical/x-pdb'
    },
    signal
  })

  if (!response.data || response.data.trim().length === 0) {
    throw new Error('Réponse PDB vide de l’API ESMFold')
  }

  return { pdbText: response.data }
}

/**
 * Calcule les fractions de pLDDT (stockées dans la colonne B-factor du PDB AlphaFold/ESMFold).
 */
export function computePlddtFractionsFromPdb(pdbText: string): {
  veryHigh: number
  confident: number
  low: number
  veryLow: number
  globalMean?: number
} {
  const lines = pdbText.split(/\r?\n/)
  let count = 0
  let veryHigh = 0
  let confident = 0
  let low = 0
  let veryLow = 0
  let sum = 0

  for (const line of lines) {
    if (line.startsWith('ATOM') || line.startsWith('HETATM')) {
      // PDB format:
      //  - Occupancy: columns 55-60 (1-based) => slice(54, 60)
      //  - B-factor:  columns 61-66 (1-based) => slice(60, 66)
      const occStr = line.length >= 60 ? line.slice(54, 60).trim() : ''
      const bStr = line.length >= 66 ? line.slice(60, 66).trim() : ''
      const occ = parseFloat(occStr)
      const b = parseFloat(bStr)

      // Choose source: prefer B-factor if valid; else occupancy
      let plddt = !isNaN(b) ? b : (!isNaN(occ) ? occ : NaN)
      if (isNaN(plddt)) continue

      // Normalize to 0–100 scale if needed (some files store 0–1 in occupancy)
      if (plddt <= 1) {
        plddt = plddt * 100
      }

      count += 1
      sum += plddt
      if (plddt > 90) veryHigh += 1
      else if (plddt >= 70) confident += 1
      else if (plddt >= 50) low += 1
      else veryLow += 1
    }
  }

  if (count === 0) {
    return { veryHigh: 0, confident: 0, low: 0, veryLow: 0 }
  }

  return {
    veryHigh: veryHigh / count,
    confident: confident / count,
    low: low / count,
    veryLow: veryLow / count,
    globalMean: sum / count
  }
}


