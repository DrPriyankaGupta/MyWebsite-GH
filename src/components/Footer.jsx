import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { author } from '../data/author'
import { books } from '../data/books'
import CredentialBadges from './CredentialBadges'
import SocialLinks from './SocialLinks'

const currentYear = new Date().getFullYear()

const footerNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Books', to: '/books' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link aria-label="Dr. Priyanka Gupta home" className="footer-brand" to="/">
            Dr. Priyanka Gupta
          </Link>
          <CredentialBadges
            className="footer-credentials"
            items={[
              'ICF-Certified Life Coach',
              'Amazon Published Author',
              'Doctorate in School of International Studies · JNU',
              'NLP Practitioner',
              'Wellness Guide',
            ]}
          />
          <SocialLinks compact />
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          {footerNavigation.map(({ label, to }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-column footer-column--books">
          <h2>Books</h2>
          {books.map((book) => (
            <Link key={book.slug} to={`/books/${book.slug}`}>
              {book.title}
            </Link>
          ))}
        </div>

        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          {author.email ? (
            <a href={`mailto:${author.email}`}>
              <Mail aria-hidden="true" size={15} /> {author.email}
            </a>
          ) : (
            <p className="footer-placeholder">Professional email to be provided</p>
          )}
          <Link to="/contact">
            Contact page <ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Dr. Priyanka Gupta. All rights reserved.</p>
        <p>Made for readers, seekers, and the endlessly curious.</p>
      </div>
    </footer>
  )
}
