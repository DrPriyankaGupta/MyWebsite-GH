import { socialLinks } from '../data/socialLinks'
import SocialIcon from './SocialIcon'

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? ' social-links--compact' : ''}`}>
      {socialLinks.map(({ name, label, icon, url }) =>
        url ? (
          <a
            aria-label={`${name} — ${label}`}
            className="social-link"
            href={url}
            key={name}
            rel="noreferrer"
            target="_blank"
          >
            <SocialIcon name={icon} />
            {!compact && <span>{label}</span>}
          </a>
        ) : (
          <span
            aria-label={`${name} profile link to be added`}
            aria-disabled="true"
            className="social-link social-link--placeholder"
            key={name}
            title={`Add the ${name} profile URL in src/data/socialLinks.js`}
          >
            <SocialIcon name={icon} />
            {!compact && <span>{label}</span>}
          </span>
        ),
      )}
    </div>
  )
}
