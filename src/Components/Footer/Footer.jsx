import logo from '../../assets/image12.png'
import './Footer.css'

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#fff" />
    <path fill="#1a1a1a" d="M16.5 24v-8.3h2.4l.4-3.2h-2.8v-2c0-.9.3-1.5 1.6-1.5h1.5V6.2A20 20 0 0 0 17.4 6c-2.2 0-3.7 1.3-3.7 3.8v2.7H11v3.2h2.7V24h2.8z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
  </svg>
)

const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.5L3 21z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    <path fill="#fff" d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2L9 8.5z" />
  </svg>
)

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Euro Truck Service" className="footer-logo" />

      <div className="footer-cols">
        <div className="footer-col">
          <h3>Home</h3>
          <ul className="footer-links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Why us?</a></li>
            <li><a href="#">Any questions?</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacts</h3>
          <div className="footer-contact">
            <ul className="footer-links">
              <li><a href="tel:+77088028888">+7 (708) 802 88 88</a></li>
              <li><a href="tel:+77088038888">+7 (708) 803 88 88</a></li>
              <li><a href="tel:+77085151518">+7 (708) 51 51 518</a></li>
              <li><a href="tel:+77005151518">+7 (700) 51 51 518</a></li>
            </ul>
            <a className="footer-icon-row whatsapp" href="https://wa.me/77088028888">
              <WhatsappIcon /> +7 (708) 802 88 88
            </a>
            <div className="footer-icon-row address">
              <PinIcon /> Bishkek, 69 Lyalyaly St
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3>Follow us</h3>
          <div className="footer-social">
            <a href="#"><FacebookIcon /> truck_service_official</a>
            <a href="#"><InstagramIcon /> truck_service_official</a>
          </div>
        </div>
      </div>

      <div className="footer-line" />
      <p className="footer-copy">Copyright © Truck Services 2022. All rights reserved.</p>
    </footer>
  )
}
