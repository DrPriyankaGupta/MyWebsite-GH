import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://drpriyankawellness.com'
const defaultImage = `${siteUrl}/images/author-profile.webp`

export default function Seo({ title, description, structuredData, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const canonicalUrl = `${siteUrl}${pathname}`
    document.title = title

    const setMeta = (selector, content) => {
      const element = document.querySelector(selector)
      if (element) element.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[name="robots"]', noindex ? 'noindex, follow' : 'index, follow')
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', canonicalUrl)
    setMeta('meta[property="og:image"]', defaultImage)
    setMeta('meta[property="og:image:alt"]', 'Dr. Priyanka Gupta')
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="twitter:image"]', defaultImage)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    let jsonLd = document.querySelector('#page-structured-data')
    if (structuredData) {
      if (!jsonLd) {
        jsonLd = document.createElement('script')
        jsonLd.id = 'page-structured-data'
        jsonLd.type = 'application/ld+json'
        document.head.appendChild(jsonLd)
      }
      jsonLd.textContent = JSON.stringify(structuredData)
    } else if (jsonLd) {
      jsonLd.remove()
    }
  }, [description, noindex, pathname, structuredData, title])

  return null
}
