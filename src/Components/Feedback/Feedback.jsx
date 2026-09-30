import { useState } from 'react'
import bg from '../../assets/image11.png'
import './Feedback.css'

export default function Feedback() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send { name, phone } to your backend / email service
    console.log({ name, phone })
  }

  return (
    <section className="login">
      <img src={bg} alt="" className="login-bg" />

      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-text">
          <h2>Still have questions?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>

        <div className="login-fields">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">Send</button>
      </form>
    </section>
  )
}
