import axios from 'axios'

/**
 * Traduit un texte de l'anglais vers le français en utilisant l'API Google Translate
 */
export async function translateToFrench(text: string): Promise<string> {
  if (!text || text.trim() === '') return text
  
  try {
    // Utiliser l'API de traduction de Google (version gratuite)
    const response = await axios.get(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fr&dt=t&q=${encodeURIComponent(text)}`
    )
    const data = response.data
    
    // L'API retourne un tableau avec la traduction
    if (Array.isArray(data) && data[0] && Array.isArray(data[0])) {
      const translatedParts = data[0].map((item: unknown[]) => item[0]).filter(Boolean)
      const translatedText = translatedParts.join('')
      return translatedText || text
    }
    
    return text
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('Erreur lors de la traduction:', error.message)
    } else {
      console.error('Erreur lors de la traduction:', error)
    }
    return text
  }
}

/**
 * Traduit plusieurs textes en parallèle
 */
export async function translateMultiple(texts: string[]): Promise<string[]> {
  const translations = await Promise.all(
    texts.map(text => translateToFrench(text))
  )
  return translations
}

