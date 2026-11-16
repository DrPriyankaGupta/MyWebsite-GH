import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Books', to: '/books' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [openPath, setOpenPath] = useState(null)
  const location = useLocation()
  const menuOpen = openPath === location.pathname

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label="Dr. Priyanka Gupta home" className="brand" to="/">
          <span className="brand__monogram">PG</span>
          <span className="brand__name">
            Dr. Priyanka Gupta
            <small>Amazon Author · Life Coach · Wellness Guide</small>
          </span>
        </Link>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setOpenPath(menuOpen ? null : location.pathname)}
          type="button"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav aria-label="Main navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`}>
          {navigation.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              end={to === '/'}
              key={to}
              to={to}
            >
              {label}
            </NavLink>
          ))}
          <Link className="header-cta" to="/books">
            Explore my books <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
