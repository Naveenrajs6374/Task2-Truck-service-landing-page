import parts from '../../assets/image2.png'
import wash from '../../assets/image3.png'
import accessories from '../../assets/image3 (2).png'
import oil from '../../assets/image4.png'
import './Service.css'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'

const items = [
  { title: 'Used spare parts for trucks from Europe', img: parts, cls: 'parts' },
  { title: 'Car wash for trucks and cars', img: wash, cls: 'wash' },
  { title: 'Accessories shop', img: accessories, cls: 'accessories' },
  { title: 'Oil change point for cars', img: oil, cls: 'oil' },
]

export default function Service() {
  return (
    <section className="service">
      <h2 className="service-title">Every service at a fair price</h2>
      <p className="service-sub">{LOREM}</p>

      <div className="service-grid">
        {items.map((s) => (
          <article className="service-card" key={s.title}>
            <div className="service-card-text">
              <h3>{s.title}</h3>
              <p>{LOREM}</p>
            </div>
            <img src={s.img} alt={s.title} className={`service-img ${s.cls}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
