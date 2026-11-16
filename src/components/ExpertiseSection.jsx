import {
  BadgeCheck,
  Brain,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Sprout,
  UsersRound,
} from 'lucide-react'

const credentials = [
  {
    icon: BadgeCheck,
    title: 'ICF-Certified Life Coach',
    detail: 'ICF-certified coaching professional',
  },
  {
    icon: Brain,
    title: 'NLP Practitioner',
    detail: 'Neuro-Linguistic Programming (NLP)',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Guide',
    detail: 'A professional focus on wellness',
  },
  {
    icon: GraduationCap,
    title: 'Doctorate in Humanities',
    detail: 'Jawaharlal Nehru University (JNU) · New Delhi',
  },
]

const expertiseAreas = [
  {
    icon: HeartPulse,
    title: 'Life Coaching',
    description: 'A thoughtful, person-centred practice grounded in listening, reflection, and purposeful growth.',
  },
  {
    icon: Brain,
    title: 'Neuro-Linguistic Programming',
    description: 'Exploring the relationship between language, thought patterns, and the way we experience change.',
  },
  {
    icon: Sparkles,
    title: 'Mindfulness & Wellness',
    description: 'Encouraging mindful living, self-awareness, and practical everyday well-being.',
  },
  {
    icon: Sprout,
    title: 'Personal Growth',
    description: 'Making space for self-reflection, learning, resilience, and meaningful progress.',
  },
  {
    icon: Sparkles,
    title: 'Spirituality',
    description: 'A source of reflection and inspiration in both professional work and writing.',
  },
  {
    icon: UsersRound,
    title: 'Human Behaviour',
    description: 'A continuing interest in people, their experiences, and the inner lives that shape their choices.',
  },
]

export default function ExpertiseSection() {
  return (
    <section aria-labelledby="expertise-heading" className="expertise-section">
      <div className="expertise-section__inner">
        <div className="expertise-heading">
          <p className="eyebrow">Beyond the bookshelf</p>
          <h2 id="expertise-heading">Expertise &amp; credentials</h2>
          <p>
            Academic study, professional practice, and enduring curiosity come
            together in Dr. Priyanka Gupta’s work with people and ideas.
          </p>
        </div>

        <div aria-label="Professional credentials" className="credential-grid">
          {credentials.map(({ icon: Icon, title, detail }, index) => (
            <article className={`credential-card credential-card--${index + 1}`} key={title}>
              <span className="credential-card__icon">
                <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div aria-labelledby="expertise-areas-heading" className="expertise-subheading">
          <span />
          <h3 id="expertise-areas-heading">Areas of professional expertise</h3>
          <span />
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map(({ icon: Icon, title, description }, index) => (
            <article className={`expertise-card expertise-card--${(index % 4) + 1}`} key={title}>
              <span className="expertise-card__icon">
                <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
