import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../data/socialLinks'

const youtubeLink = socialLinks.find(({ name }) => name === 'YouTube')

export default function CTASection() {
  return (
    <section className="closing-cta">
      <div>
        <p className="eyebrow eyebrow--light">A little more to discover</p>
        <h2>Explore, read, and connect.</h2>
        <p>Explore the books and find the next idea to carry with you.</p>
      </div>
      <div className="closing-cta__actions">
        <Link className="button button--light" to="/books">
          Explore the books <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
        {youtubeLink?.url && (
          <a className="cta-text-link" href={youtubeLink.url} rel="noreferrer" target="_blank">
            Watch Nuggets <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        )}
        <Link className="cta-text-link" to="/contact">
          Get in touch <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  )
}
