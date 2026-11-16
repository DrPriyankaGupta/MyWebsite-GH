import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  icon = 'right',
  className = '',
}) {
  const Icon = icon === 'down' ? ArrowDownRight : ArrowRight

  return (
    <Link className={`button button--${variant} ${className}`.trim()} to={to}>
      {children}
      <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
    </Link>
  )
}
