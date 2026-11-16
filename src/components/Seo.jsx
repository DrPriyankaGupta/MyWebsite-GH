import { useEffect } from 'react'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector, content) => {
      const element = document.querySelector(selector)
      if (element) element.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
  }, [description, title])

  return null
}
