import { useMemo, useRef, useState } from 'react'
import ProteinViewer from '../components/ProteinViewer'
import { computePlddtFractionsFromPdb, foldSequenceToPdb } from '../services/sequenceFold'

const AA_REGEX = /^[ACDEFGHIKLMNPQRSTVWYBXZOU\s\n\r\t-]+$/i

export default function Prediction() {
  const [sequence, setSequence] = useState('')
  const [pdbText, setPdbText] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const confidence = useMemo(() => {
    if (!pdbText) return undefined
    const frac = computePlddtFractionsFromPdb(pdbText)
    return {
      veryHigh: frac.veryHigh,
      confident: frac.confident,
      low: frac.low,
      veryLow: frac.veryLow,
      globalMean: frac.globalMean
    }
  }, [pdbText])

  const validateSequence = (seq: string): string | null => {
    const cleaned = seq.replace(/\s|\d|\*/g, '')
    if (cleaned.length < 20) return 'Séquence trop courte (≥ 20 aa requis)'
    if (cleaned.length > 1200) return 'Séquence trop longue (≤ 1200 aa conseillés)'
    if (!AA_REGEX.test(cleaned)) return 'Caractères invalides détectés dans la séquence'
    return null
  }

  const onSubmit = async () => {
    setError(null)
    setPdbText('')
    const err = validateSequence(sequence)
    if (err) {
      setError(err)
      return
    }

    try {
      setLoading(true)
      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller
      const result = await foldSequenceToPdb(sequence, controller.signal)
      setPdbText(result.pdbText)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue lors de la prédiction')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Prédiction 3D à partir de la séquence</h1>
        <p className="text-gray-300 mb-6">Collez une séquence d'acides aminés pour obtenir une structure 3D et la confiance pLDDT.</p>

        <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 mb-6">
          <textarea
            className="w-full h-40 p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            placeholder=">SEQUENCE\nM A D E U P ..."
            spellCheck={false}
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
          />
          <div className="flex items-center justify-between mt-3">
            <div className="text-xs text-gray-400">Supporte les lettres d'acides aminés standard. pLDDT dans les B-factors.</div>
            <button
              onClick={onSubmit}
              disabled={loading}
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-medium"
            >
              {loading ? 'Prédiction…' : 'Prédire la structure'}
            </button>
          </div>
          {error && (
            <div className="mt-3 text-sm text-red-400">{error}</div>
          )}
        </div>

        {pdbText && (
          <div className="space-y-4">
            {confidence?.globalMean !== undefined && (
              <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-200">
                  Précision moyenne pLDDT: <span className="font-semibold text-blue-400">{`${confidence.globalMean?.toFixed(1)}%`}</span>
                </p>
              </div>
            )}
            <ProteinViewer
              pdbString={pdbText}
              uniprotId={''}
              confidenceScores={{
                veryHigh: confidence?.veryHigh,
                confident: confidence?.confident,
                low: confidence?.low,
                veryLow: confidence?.veryLow
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}


