import scania from '../../assets/image5.png'
import volvo from '../../assets/image5 (2).png'
import man from '../../assets/image6.png'
import daf from '../../assets/image7.png'
import renault from '../../assets/image8.png'
import './Model.css'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'

export default function Model() {
  return (
    <section className="model">
      <div className="model-text">
        <h2>Wondering who we actually are?</h2>
        <p>{LOREM}</p>
        <p>{LOREM}</p>
        <p>{LOREM}</p>
      </div>

      <div className="model-logos">
        <img src={scania} alt="Scania" className="logo scania" />
        <img src={volvo} alt="Volvo" className="logo volvo" />
        <img src={man} alt="MAN" className="logo man" />
        <img src={daf} alt="DAF" className="logo daf" />
        <img src={renault} alt="Renault" className="logo renault" />
      </div>
    </section>
  )
}
