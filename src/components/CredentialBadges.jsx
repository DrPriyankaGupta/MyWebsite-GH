export default function CredentialBadges({ items, className = '' }) {
  return (
    <ul aria-label="Professional credentials" className={`credential-badges ${className}`.trim()}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
