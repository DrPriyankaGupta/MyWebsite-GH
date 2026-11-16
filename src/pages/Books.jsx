import BookCard from '../components/BookCard'
import PageIntro from '../components/PageIntro'
import Seo from '../components/Seo'
import { books } from '../data/books'

export default function Books() {
  return (
    <>
      <Seo
        description="Explore the books of Dr. Priyanka Gupta, from personal development and university fiction to spiritual poetry and edutainment."
        title="Books | Dr. Priyanka Gupta"
      />
      <main>
        <PageIntro
          description="Explore four titles from Dr. Priyanka Gupta’s literary collection, discover ideas on personal growth and spirituality, and join a journey of lifelong learning."
          eyebrow="The literary collection"
          title="Discover the books"
        />
        <section aria-label="All books" className="book-listing">
          <div className="book-grid book-grid--listing">
            {books.map((book) => <BookCard book={book} key={book.slug} />)}
          </div>
        </section>
      </main>
    </>
  )
}
