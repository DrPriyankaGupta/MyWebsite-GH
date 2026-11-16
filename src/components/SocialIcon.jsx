export default function SocialIcon({ name, size = 18 }) {
  const sharedProps = {
    'aria-hidden': true,
    height: size,
    viewBox: '0 0 24 24',
    width: size,
  }

  if (name === 'youtube') {
    return (
      <svg {...sharedProps} fill="none">
        <rect fill="#ff0000" height="14" rx="4" width="20" x="2" y="5" />
        <path d="m10 9 6 3-6 3V9Z" fill="white" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...sharedProps} fill="none">
        <path d="M5 9v10M5 5.01l.01-.011M10 19v-5.3c0-2.4 4.8-2.6 4.8 0V19M10 10v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <circle cx="5" cy="5.5" r="1.3" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg {...sharedProps}>
        <defs>
          <linearGradient id="instagram-gradient" x1="3" x2="21" y1="21" y2="3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffdc80" />
            <stop offset=".5" stopColor="#e1306c" />
            <stop offset="1" stopColor="#833ab4" />
          </linearGradient>
        </defs>
        <rect fill="url(#instagram-gradient)" height="20" rx="6" width="20" x="2" y="2" />
        <circle cx="12" cy="12" r="4.25" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.25" fill="white" />
      </svg>
    )
  }

  return (
    <svg {...sharedProps} fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.7-4.5 4.7V10H7v3h2.6v8h3.9Z" />
    </svg>
  )
}
