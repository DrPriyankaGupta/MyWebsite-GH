import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import BookDetails from './pages/BookDetails'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const newsletterFormUrl = 'https://67570e4f.sibforms.com/v2/serve/MUIFAHG61mvY7ii2c6lWmIOnHQCfJTDk3sKHCHeEEb2_saWYmw7GDNAePN91FXFck1Jjnl2EqM6TvRHM0Ud1RClJRJLCirXgMs0xOcp4NGpCUD1o7y53w3TITEPwz6R8DcSiWAFEqIKB3XtkRdzBcZdMpwA-GTrBZcEBSrBoKBO4bxJeJGiSoStcLJsBLoZvcnrWaw_f0TtmHK-82Q=='

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function NewsletterPopup({ onClose }) {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
    }
  }, [onClose])

  return (
    <div
      aria-labelledby="newsletter-popup-heading"
      className="newsletter-popup"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="newsletter-popup__panel">
        <button
          aria-label="Close newsletter signup"
          className="newsletter-popup__close"
          onClick={onClose}
          title="Close newsletter signup"
          type="button"
        >
          <X aria-hidden="true" size={17} strokeWidth={1.8} />
        </button>
        <div className="newsletter-popup__intro">
          <p className="eyebrow">A thoughtful note, now and then</p>
          <h2 id="newsletter-popup-heading">Stay inspired.</h2>
          <p>Sign up for reflections, new writing, and gentle reminders from Dr. Priyanka Gupta.</p>
        </div>
        <div className="newsletter-popup__form">
          <iframe
            allowFullScreen
            frameBorder="0"
            height="620"
            scrolling="auto"
            src={newsletterFormUrl}
            title="Newsletter signup form"
            width="540"
          />
        </div>
      </div>
    </div>
  )
}

function SiteLayout() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem('newsletter-popup-dismissed')) return undefined

    const timer = window.setTimeout(() => {
      setIsNewsletterOpen(true)
    }, 8000)

    return () => window.clearTimeout(timer)
  }, [])

  const closeNewsletter = () => {
    window.sessionStorage.setItem('newsletter-popup-dismissed', 'true')
    setIsNewsletterOpen(false)
  }

  return (
    <>
      {isNewsletterOpen && <NewsletterPopup onClose={closeNewsletter} />}
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <div id="main-content" tabIndex="-1">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Books />} path="/books" />
          <Route element={<BookDetails />} path="/books/:slug" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
      <section aria-labelledby="newsletter-heading" className="newsletter-embed">
        <div className="newsletter-embed__inner">
          <div className="newsletter-embed__intro">
            {/* <span className="newsletter-embed__badge">From the journal</span> */}
            <p className="eyebrow">Stay connected</p>
            <h2 id="newsletter-heading">A little <em>inspiration</em>, delivered.</h2>
            <p>
              Join the community for thoughtful reflections, new writing, and gentle reminders to make space for what matters.
            </p>
          </div>
          <div className="newsletter-embed__card">
            <iframe
              allowFullScreen
              frameBorder="0"
              height="620"
              scrolling="no"
              src={newsletterFormUrl}
              title="Newsletter signup form"
              width="540"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  )
}
