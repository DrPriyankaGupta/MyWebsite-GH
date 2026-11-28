import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <Link
        aria-label={`Read more about ${book.title}`}
        className="book-card__cover-link"
        to={`/books/${book.slug}`}
      >
        <div className="book-card__cover">
          <img alt={`${book.title} cover`} loading="lazy" src={book.cover} />
        </div>
      </Link>
      <div className="book-card__content">
        <p className="book-card__category">{book.category}</p>
        <h3>
          <Link to={`/books/${book.slug}`}>{book.title}</Link>
        </h3>
        <p className="book-card__description">{book.description}</p>
        <div className="book-card__actions">
          <Link className="text-link" to={`/books/${book.slug}`}>
            View details <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          {book.amazonUrl ? (
            <a
              className="text-link text-link--muted"
              href={book.amazonUrl}
              rel="noreferrer"
              target="_blank"
            >
              Buy on Amazon <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          ) : (
            <button
              className="button button--disabled book-card__buy"
              disabled
              title={`Add the verified Amazon URL for ${book.title} in src/data/books.js`}
              type="button"
            >
              Buy on Amazon - link to be added
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
