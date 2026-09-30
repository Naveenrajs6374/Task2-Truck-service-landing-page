import { useState } from 'react'
import logo from '../../assets/navbar image.png'
import './Navbar.css'

const PinIcon = () => (
  <svg className="pin-icon" width="20" height="20" viewBox="0 0 24 24" fill="#707070" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2a6.5 6.5 0 0 0-6.5 6.5c0 4.6 6.5 10 6.5 10s6.5-5.4 6.5-10A6.5 6.5 0 0 0 12 2zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    <rect x="6" y="20.5" width="12" height="2" rx="1" />
  </svg>
)

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#6b6f76" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.2 13.2-5.2-3.1V6h1.5v5.3l4.5 2.6-.8 1.3z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="phone-icon" width="20" height="20" viewBox="0 0 24 24" fill="#707070" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
  </svg>
)

// Hamburger / close icon for the mobile menu button
const MenuIcon = ({ open }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b1b1b" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    {open ? (
      <>
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </>
    ) : (
      <>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </>
    )}
  </svg>
)

const NAV_ITEMS = [
  { label: 'About us', href: '#' },
  { label: 'Why us?', href: '#' },
  { label: "So that's why", href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-top">
          <div className="info-block">
            <PinIcon />
            <div>
              <span className="info-label">Our address:</span>
              <span className="info-value">Bishkek, 69 Lyalyaly St</span>
            </div>
          </div>

          <div className="info-block with-divider">
            <ClockIcon />
            <div>
              <span className="info-label">Opening hours:</span>
              <span className="info-value">8:00 to 22:00, seven days a week</span>
            </div>
          </div>

          <div className="nav-phones">
            <PhoneIcon />
            <div>
              <a href="tel:+77085151518">+7 (708) 51 51 518</a>
              <a href="tel:+77005151518">+7 (700) 51 51 518</a>
            </div>
          </div>
        </div>

        <div className="nav-main">
          <img src={logo} alt="Euro Truck Service" className="nav-logo" />

          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="nav-right">
            <button className="nav-btn">Request a call</button>

            {/* Shows only on tablet/mobile (see Navbar.css) */}
            <button
              type="button"
              className="nav-menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Dropdown panel, only rendered/shown on tablet/mobile when open */}
        <nav className={menuOpen ? 'nav-mobile-menu open' : 'nav-mobile-menu'}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
