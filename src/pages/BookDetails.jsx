import { ArrowLeft, ArrowUpRight, BookOpenCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import BookCard from '../components/BookCard'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import { books } from '../data/books'

export default function BookDetails() {
  const { slug } = useParams()
  const book = books.find((item) => item.slug === slug)

  if (!book) return null

  const relatedBooks = books.filter((item) => item.slug !== book.slug).slice(0, 3)

  return (
    <>
      <Seo
        description={book.description}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Book',
          name: book.title,
          author: {
            '@type': 'Person',
            name: 'Dr. Priyanka Gupta',
            url: 'https://drpriyankawellness.com/about',
          },
          isbn: book.isbn,
          image: `https://drpriyankawellness.com${book.cover}`,
          description: book.description,
          url: `https://drpriyankawellness.com/books/${book.slug}`,
        }}
        title={`${book.title} | Dr. Priyanka Gupta`}
      />
      <main>
        <div className="detail-back">
          <Link className="text-link" to="/books">
            <ArrowLeft aria-hidden="true" size={15} /> Back to all books
          </Link>
        </div>
        <section className="book-detail-hero">
          <div className="book-detail-hero__cover">
            <img alt={`${book.title} cover`} src={book.cover} />
          </div>
          <div className="book-detail-hero__copy">
            <p className="eyebrow">{book.category}</p>
            <h1>{book.title}</h1>
            <p className="book-detail-hero__intro">{book.introduction}</p>
            <p className="book-detail-hero__author">A book by Dr. Priyanka Gupta</p>
            {book.amazonUrl ? (
              <a className="button button--primary" href={book.amazonUrl} rel="noreferrer" target="_blank">
                Buy on Amazon <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : (
                  <button className="button button--disabled" disabled type="button">
                    Purchase link to be added
              </button>
            )}
          </div>
        </section>

        <div className="book-detail-body">
          {book.youtubeId && (
            <section className="detail-section detail-section--video">
              <p className="eyebrow">Watch the preview</p>
              <h2>Discover this book</h2>
              <div className="book-video">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  src={`https://www.youtube-nocookie.com/embed/${book.youtubeId}`}
                  title={`${book.title} YouTube preview`}
                />
              </div>
              {book.youtubeUrl && (
                <a className="text-link book-video__link" href={book.youtubeUrl} rel="noreferrer" target="_blank">
                  Watch on YouTube <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              )}
            </section>
          )}
          <section className="detail-section detail-section--about">
            <p className="eyebrow">About this title</p>
            <h2>About the book</h2>
            <p>{book.about}</p>
          </section>
          <section className="detail-section detail-section--lavender">
            <BookOpenCheck aria-hidden="true" className="detail-section__icon" size={25} strokeWidth={1.5} />
            <p className="eyebrow">For the reader</p>
            <h2>What readers may discover</h2>
            <p>{book.learn}</p>
          </section>
          <section className="detail-section detail-section--why-read">
            <p className="eyebrow">A closer look</p>
            <h2>Why explore this book</h2>
            <p>{book.whyRead}</p>
          </section>
          {(book.publishedOn || book.isbn) && (
            <section className="detail-section">
              <p className="eyebrow">Publication details</p>
              <h2>Technical details</h2>
              <dl className="book-detail-meta">
                {book.publishedOn && (
                  <>
                    <dt>Published</dt>
                    <dd>{book.publishedOn}</dd>
                  </>
                )}
                {book.isbn && (
                  <>
                    <dt>ISBN</dt>
                    <dd>{book.isbn}</dd>
                  </>
                )}
              </dl>
            </section>
          )}
          <section className="detail-section detail-section--reviews">
            <p className="eyebrow">Reader reflections</p>
            <h2>Reviews &amp; testimonials</h2>
            {book.review ? (
              <blockquote>
                <p>“{book.review.quote}”</p>
                <cite>{book.review.author} <span aria-label="5 out of 5 stars">★★★★★</span></cite>
              </blockquote>
            ) : (
              <p>[Reader testimonials may be added here when supplied and approved.]</p>
            )}
          </section>
        </div>

        <section className="section related-books">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Continue the journey</p>
              <h2>More titles to explore</h2>
            </div>
            <Link className="text-link section-heading__link" to="/books">
              View all titles <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="book-grid book-grid--related">
            {relatedBooks.map((related) => <BookCard book={related} key={related.slug} />)}
          </div>
        </section>
        <CTASection />
      </main>
    </>
  )
}
