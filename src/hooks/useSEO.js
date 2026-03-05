import { useEffect } from 'react'

const SITE_NAME = 'KOYO Japanese Tapasu Bar'
const DEFAULT_TITLE = 'KOYO Japanese Tapasu Bar | Authentic Sushi in Amersham & Beaconsfield'
const DEFAULT_DESC = 'KOYO is a Japanese tapasu bar serving high-quality sushi, katsu, teriyaki and ramen in Amersham and Beaconsfield, Buckinghamshire.'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function useSEO({ title, description } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESC

    document.title = fullTitle
    setMeta('description', desc)
    setMeta('og:title', fullTitle)
    setMeta('og:description', desc)
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
  }, [title, description])
}
