import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import ButtonLink from '../components/ButtonLink'
import CTASection from '../components/CTASection'
import CredentialBadges from '../components/CredentialBadges'
import ExpertiseSection from '../components/ExpertiseSection'
import RecognitionSection from '../components/RecognitionSection'
import Seo from '../components/Seo'
import SocialLinks from '../components/SocialLinks'
import { author, interests } from '../data/author'
import { books } from '../data/books'

const banners = [
  {
    alt: 'Travel and Exploration in the Mountains',
    src: '/images/banners/Travel & Exploration in the Mountains.webp',
  },
  {
    alt: 'The Real Luxuries: Joyful Everyday Moments',
    src: '/images/banners/The Real Luxuries_ Joyful Everyday Moments.webp',
  },
  {
    alt: 'Let Your Memories Enrich Life',
    src: '/images/banners/Let Your Memories Enrich Life.webp',
  },
  {
    alt: 'Four Inspiring Books on Display',
    src: '/images/banners/Four Inspiring Books on Display.webp',
  },
  {
    alt: 'Cozy Lessons Taught by Time',
    src: '/images/banners/Cozy Lessons Taught by Time.webp',
  },
]

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0)
  const [isBannerPaused, setIsBannerPaused] = useState(false)

  useEffect(() => {
    if (isBannerPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % banners.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isBannerPaused])

  const selectBanner = (index) => {
    setActiveBanner(index)
  }

  return (
    <>
      <Seo
        description="Explore the writing, professional practice, and areas of interest of Dr. Priyanka Gupta—Amazon-published author, ICF-certified Life Coach, NLP Practitioner, and Wellness Guide."
        title="Dr. Priyanka Gupta | Author, Life Coach & Wellness Guide"
      />
      <main className="home-page">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow"><span /> Words, wisdom &amp; well-being</p>
            <h1>
              Exploring ideas.
              <br />
              <em>Inspiring growth.</em>
            </h1>
            <p className="hero__name">{author.name}</p>
            <CredentialBadges
              className="hero__credentials"
              items={author.designation.split(' · ')}
            />
            <p className="hero__description">
              Through writing, coaching, NLP, and wellness guidance, Dr. Priyanka Gupta brings a reflective perspective to the ideas and experiences that shape a life.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/books">Explore the books</ButtonLink>
              <ButtonLink icon="down" to="/about" variant="text">
                Discover the author
              </ButtonLink>
            </div>
            <a className="hero__scroll" href="#featured-books">
              Scroll to explore <ArrowDownRight aria-hidden="true" size={15} />
            </a>
          </div>
          <div className="hero__portrait-wrap">
            <div aria-hidden="true" className="hero__portrait-frame" />
            <img
              alt={`${author.name} portrait`}
              className="hero__portrait"
              fetchPriority="high"
              src={author.image}
            />
            <div className="hero__portrait-note">
              <Sparkles aria-hidden="true" size={17} />
              <span>Inspiring minds, nurturing souls, and celebrating the journey of life</span>
            </div>
          </div>
          <span aria-hidden="true" className="hero__ornament hero__ornament--one">✳</span>
          <span aria-hidden="true" className="hero__ornament hero__ornament--two">·</span>
        </section>

        <ExpertiseSection />

        <section className="section section--books" id="featured-books">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected works</p>
                <h2>Discover the books.</h2>
            </div>
            <Link className="text-link section-heading__link" to="/books">
              Explore all titles <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="book-grid">
            {books.map((book) => <BookCard book={book} key={book.slug} />)}
          </div>
        </section>

        <section className="about-preview">
          <div
            aria-label="Featured author banners"
            className="about-preview__art"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsBannerPaused(false)
            }}
            onFocus={() => setIsBannerPaused(true)}
            onMouseEnter={() => setIsBannerPaused(true)}
            onMouseLeave={() => setIsBannerPaused(false)}
            role="region"
          >
            <div className="about-preview__slides">
              {banners.map(({ alt, src }, index) => (
                <img
                  alt={alt}
                  className={index === activeBanner ? 'is-active' : ''}
                  key={src}
                  src={src}
                />
              ))}
            </div>
            <button
              aria-label="Previous banner"
              className="about-preview__control about-preview__control--previous"
              onClick={() => selectBanner((activeBanner - 1 + banners.length) % banners.length)}
              type="button"
            >
              <ArrowLeft aria-hidden="true" size={17} />
            </button>
            <button
              aria-label="Next banner"
              className="about-preview__control about-preview__control--next"
              onClick={() => selectBanner((activeBanner + 1) % banners.length)}
              type="button"
            >
              <ArrowRight aria-hidden="true" size={17} />
            </button>
            <div className="about-preview__dots">
              {banners.map(({ alt }, index) => (
                <button
                  aria-label={`Show banner: ${alt}`}
                  aria-pressed={index === activeBanner}
                  className={index === activeBanner ? 'is-active' : ''}
                  key={alt}
                  onClick={() => selectBanner(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
          <div className="about-preview__copy">
            <p className="eyebrow">The author</p>
            <h2>Writing from curiosity, experience, and reflection.</h2>
            <p>
              Dr. Priyanka Gupta brings together mindfulness, coaching, and lived experience to make space for more thoughtful ways of seeing and living.
            </p>
            <div className="about-preview__credential">
              <GraduationCap aria-hidden="true" size={19} />
              <span>Doctorate in Humanities<br /><strong>Jawaharlal Nehru University, New Delhi</strong></span>
            </div>
            <ButtonLink to="/about" variant="outline">Read the author’s story</ButtonLink>
          </div>
        </section>

        <RecognitionSection />

        <section className="section interests-section">
          <div className="section-heading section-heading--center">
            <div>
              <p className="eyebrow">Ideas that inform the work</p>
              <h2>Fields of curiosity</h2>
              <p className="section-subtitle">Themes that shape the books, conversations, and work beyond the page.</p>
            </div>
          </div>
          <div className="interest-list">
            {interests.map((interest, index) => (
              <span className="interest-pill" key={interest}>
                <span className="interest-pill__number">0{index + 1}</span>{interest}
              </span>
            ))}
          </div>
        </section>

        <section className="social-section">
          <div className="social-section__copy">
            <p className="eyebrow">Beyond the page</p>
            <h2>Continue the conversation.</h2>
            <p>Find new videos, reflections, and updates from Dr. Priyanka Gupta.</p>
          </div>
          <div className="social-section__links">
            <span className="social-section__label">Follow along</span>
            <SocialLinks />
          </div>
        </section>
        <CTASection />
        




      </main>
    </>
  )
}
