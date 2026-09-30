import trucks from '../../assets/image1.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-copy">
          <h1>Affordable truck service</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
        <button className="hero-btn">What we do</button>
      </div>
      <img src={trucks} alt="Row of trucks" className="hero-img" />
    </section>
  )
}
