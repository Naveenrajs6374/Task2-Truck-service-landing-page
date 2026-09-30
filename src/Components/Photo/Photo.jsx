import { useState } from 'react'
import photo from '../../assets/image10.png'
import './Photo.css'

// Only one photo was supplied, so it repeats. Swap in real images here.
const slides = [photo, photo, photo, photo]

export default function Photo() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="photo">
      <h2 className="photo-title">Photos</h2>

      <div className="photo-slider">
        <div className="photo-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((src, i) => (
            <img key={i} src={src} alt={`Photo ${i + 1}`} className="photo-slide" />
          ))}
        </div>
      </div>

      <div className="photo-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            className={i === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
