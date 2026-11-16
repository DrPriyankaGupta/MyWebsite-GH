import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import PageIntro from '../components/PageIntro'
import Seo from '../components/Seo'
import SocialLinks from '../components/SocialLinks'
import { author, enquiryTypes } from '../data/author'

export default function Contact() {
  const [formMessage, setFormMessage] = useState(null)
  const phoneDigits = author.whatsappNumber?.replace(/\D/g, '')
  const whatsappBaseUrl = phoneDigits ? `https://wa.me/${phoneDigits}` : null
  const whatsappUrl = phoneDigits
    ? `${whatsappBaseUrl}?text=${encodeURIComponent(author.whatsappMessage)}`
    : null

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      setFormMessage({
        type: 'error',
        text: 'Please review the highlighted fields and complete the required information.',
      })
      return
    }

    const formData = new FormData(form)
    const enquiryMessage = [
      `Hello Dr. Priyanka Gupta,`,
      '',
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Enquiry type: ${formData.get('enquiryType')}`,
      '',
      `Message: ${formData.get('message')}`,
    ].join('\n')
    const submissionUrl = whatsappBaseUrl
      ? `${whatsappBaseUrl}?text=${encodeURIComponent(enquiryMessage)}`
      : null

    if (submissionUrl) {
      setFormMessage({
        type: 'notice',
        text: 'Opening WhatsApp with your message.',
      })
      window.open(submissionUrl, '_blank', 'noopener,noreferrer')
      return
    }

    setFormMessage({
      type: 'error',
      text: 'WhatsApp is not configured. Please use the contact details provided.',
    })
  }

  return (
    <>
      <Seo
        description="Contact Dr. Priyanka Gupta for book enquiries, interviews, speaking engagements, life coaching, collaborations, and other enquiries."
        title="Contact | Dr. Priyanka Gupta"
      />
      <main>
        <PageIntro
          description="For book enquiries, conversations, and other notes, use the form below to send a prefilled message through WhatsApp."
          eyebrow="Start a conversation"
          title="Get in touch"
        />
        <section className="contact-layout">
          <div className="contact-form-panel">
            <p className="eyebrow">Send a message</p>
            <h2>What would you like to talk about?</h2>
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="full-name">Full name <span aria-hidden="true">*</span></label>
                <input autoComplete="name" id="full-name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
                <input
                  autoComplete="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone number <span className="optional-label">(optional)</span></label>
                <input autoComplete="tel" id="phone" name="phone" placeholder="Your phone number" type="tel" />
              </div>
              <div className="form-field">
                <label htmlFor="enquiry-type">Subject / enquiry type <span aria-hidden="true">*</span></label>
                <select defaultValue="" id="enquiry-type" name="enquiryType" required>
                  <option disabled value="">Choose an enquiry type</option>
                  {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div className="form-field form-field--full">
                <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                <textarea id="message" name="message" placeholder="Write your message..." required rows={5} />
              </div>
              {formMessage && (
                <p
                  aria-live="polite"
                  className={`form-message form-message--${formMessage.type}`}
                  role={formMessage.type === 'error' ? 'alert' : 'status'}
                >
                  {formMessage.text}
                </p>
              )}
              <button className="button button--primary contact-submit" type="submit">
                Check form details <ArrowUpRight aria-hidden="true" size={16} />
              </button>
              <p className="form-note">Required fields are marked with *. Your message will open in WhatsApp for you to review and send.</p>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="contact-aside__intro">
              <p className="eyebrow">Contact details</p>
              <h2>Let's connect.</h2>
              <p>Contact details and social profile links will be added here when they are available.</p>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon"><Mail aria-hidden="true" size={18} /></span>
              <div>
                <span>Professional email</span>
                {author.email ? (
                  <a href={`mailto:${author.email}`}>{author.email}</a>
                ) : (
                  <p>[EMAIL TO BE PROVIDED]</p>
                )}
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon"><Phone aria-hidden="true" size={18} /></span>
              <div>
                <span>WhatsApp</span>
                {author.whatsappNumber ? (
                  <a href={whatsappUrl} rel="noreferrer" target="_blank">{author.whatsappNumber}</a>
                ) : (
                  <p>[WHATSAPP NUMBER TO BE PROVIDED]</p>
                )}
              </div>
            </div>
            {whatsappUrl ? (
              <a className="button button--outline whatsapp-button" href={whatsappUrl} rel="noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" size={17} /> Enquire on WhatsApp
              </a>
            ) : (
              <span aria-disabled="true" className="button button--disabled whatsapp-button">
                <MessageCircle aria-hidden="true" size={17} /> WhatsApp link to be added
              </span>
            )}
            <div className="contact-social">
              <p className="eyebrow">Follow along</p>
              <SocialLinks compact />
            </div>
          </aside>
        </section>
      </main>
    </>
  )
}
