import { BookOpen, Compass, GraduationCap, HeartHandshake, Sparkles } from 'lucide-react'
import CTASection from '../components/CTASection'
import ExpertiseSection from '../components/ExpertiseSection'
import RecognitionSection from '../components/RecognitionSection'
import Seo from '../components/Seo'
import { author, interests } from '../data/author'

const journey = [
  {
    icon: BookOpen,
    title: 'Amazon Published Author',
    text: 'As an Amazon-published author, Dr. Priyanka Gupta explores questions about life, spirituality, mindfulness, and personal growth through her writing.',
  },
  {
    icon: HeartHandshake,
    title: 'ICF-Certified Life Coach',
    text: 'Dr. Priyanka Gupta brings her life-coaching practice to a broader interest in personal development and human experience.',
  },
  {
    icon: Sparkles,
    title: 'NLP Practitioner',
    text: 'NLP is one of Dr. Priyanka Gupta’s professional practices and areas of interest.',
  },
  {
    icon: Compass,
    title: 'Wellness Guide',
    text: 'Dr. Priyanka Gupta’s wellness interests include mindfulness, self-reflection, and the many ways people grow.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        description="Discover Dr. Priyanka Gupta’s journey as an Amazon-published author, academic background, professional practice, and interests in spirituality, mindfulness, and personal growth."
        title="About the Author | Dr. Priyanka Gupta"
      />
      <main>
        <section className="about-hero">
          <div className="about-hero__copy">
            <p className="eyebrow">The author and her work</p>
            <h1>A life of learning, <em>put into words.</em></h1>
            <p className="about-hero__lead">{author.biography}</p>
            <p>
              Her books and professional work meet at the same place: a curiosity about people, meaning, and the choices that shape a life.
            </p>
          </div>
          <div className="about-hero__image-wrap">
            <img
              alt={`${author.name} portrait`}
              className="about-hero__image"
              loading="lazy"
              src={author.image}
            />
          </div>
        </section>

        <section className="academic-band">
          <span className="academic-band__icon"><GraduationCap aria-hidden="true" size={27} strokeWidth={1.5} /></span>
          <div>
            <p className="eyebrow">Academic background</p>
            <h2>Doctorate in Humanities</h2>
            <p>Jawaharlal Nehru University (JNU), New Delhi</p>
          </div>
          <p className="academic-band__detail">
            Her academic background reflects a wider interest in people, ideas, and the forces that shape how we live.
          </p>
        </section>

        <ExpertiseSection />

        <section className="section journey-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Professional practice</p>
              <h2>Coaching, NLP, wellness, and writing.</h2>
            </div>
          </div>
          <div className="journey-grid">
            {journey.map(({ icon: Icon, title, text }, index) => (
              <article className="journey-card" key={title}>
                <span className="journey-card__number">0{index + 1}</span>
                <Icon aria-hidden="true" className="journey-card__icon" size={23} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="inspiration-section">
          <div className="inspiration-section__quote-mark" aria-hidden="true">“</div>
          <div>
            <p className="eyebrow">The ideas behind the writing</p>
            <h2>Making room for reflection.</h2>
            <p>
              Spirituality, mindfulness, personal growth, and lived experience inform Dr. Priyanka Gupta’s writing. Her work invites readers to pause, notice, and carry useful insight into everyday life.
            </p>
          </div>
        </section>

        <section className="section about-interests">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Beyond the page</p>
              <h2>Interests and inspiration</h2>
            </div>
          </div>
          <div className="interest-list">
            {interests.filter((item) => item !== 'NLP' && item !== 'Wellness').map((interest, index) => (
              <span className="interest-pill" key={interest}>
                <span className="interest-pill__number">0{index + 1}</span>{interest}
              </span>
            ))}
          </div>
        </section>

        <RecognitionSection />
        <CTASection />
      </main>
    </>
  )
}
