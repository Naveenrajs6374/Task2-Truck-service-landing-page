import map from '../../assets/image9.png'
import './Location.css'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'

export default function Location() {
  return (
    <section className="location">
      <h2 className="location-title">Where are we?</h2>

      <div className="location-text">
        <p>{LOREM}</p>
        <p>{LOREM}</p>
        <p>{LOREM}</p>
      </div>

      <img src={map} alt="Map showing our location in Zurich" className="location-map" />
    </section>
  )
}
