import { BookOpen, ExternalLink, LibraryBig } from 'lucide-react'

export default function RecognitionSection() {
  return (
    <>
      <section aria-labelledby="recognition-heading" className="recognition-note">
        <div aria-hidden="true" className="recognition-note__icon">
          <LibraryBig size={26} strokeWidth={1.6} />
        </div>
        <div className="recognition-note__content">
          <p className="eyebrow">Literary recognition</p>
          <h2 id="recognition-heading">A place on distinguished bookshelves.</h2>
          <p>
            Dr. Priyanka Gupta’s books are part of the collections at{' '}
            <strong>The Russian State Library in Moscow</strong> and{' '}
            <strong>Syed Zahoor Quasim Community Library in Ladakh</strong>.
          </p>
          <BookOpen aria-hidden="true" className="recognition-note__ornament" size={18} />
        </div>
      </section>

      <section aria-labelledby="interview-heading" className="interview-section">
        <div className="interview-section__heading">
          <p className="eyebrow">Featured conversation</p>
          <h2 id="interview-heading">A closer look at the journey behind the work.</h2>
        </div>
        <article className="interview-card">
          <div className="interview-card__content">
            <div className="interview-card__meta">
              <span className="interview-card__publication">
                <img alt="Interview Times" src="/images/interview-times-logo.png" />
              </span>
              <time dateTime="2023-10-10">October 10, 2023</time>
            </div>
            <p className="interview-card__type">Author interview</p>
            <h3>In Conversation with Dr. Priyanka Gupta</h3>
            <p>
              An inspiring conversation exploring Dr. Priyanka Gupta’s journey as an author, ICF Life Coach and NLP practitioner, her literary works, personal growth philosophy, and passion for empowering others.
            </p>
            <div className="interview-card__actions">
              <a className="button button--outline" href="https://interviewtimes.net/in-conversation-with-dr-priyanka-gupta/" rel="noreferrer" target="_blank">
                Read Full Interview <ExternalLink aria-hidden="true" size={14} />
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
