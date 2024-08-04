/**
 * Determina o comportamento de abertura de um link baseado no seu URL.
 * @param {string | undefined} url - O URL do link.
 * @returns { target: string, rel: string } - Os atributos target e rel apropriados para o link.
 */

const getLinkAttributes = (url: string) => {
  if (!url) {
    return { target: '', rel: '' }
  }

  if (url.startsWith('https://') || url.endsWith('.pdf')) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return { target: '', rel: '' }
}

export default getLinkAttributes
