import React, { useRef } from 'react'
import './Controlledform.css'

function ContactFormUncontrolledRef() {

const emailRef = useRef(null)
const contactRef = useRef(null)
const messageRef = useRef(null)

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('Email: ', emailRef.current.value);
    console.log('Contact: ', contactRef.current.value);
    console.log('Message by user: ', messageRef.current.value);
}

  return (
    <>
    <div className="contact-container">
  <div className="contact-card">
    <h1>Contact Form</h1>
    <p className="subtitle">Get in touch with us</p>

    <form onSubmit={handleSubmit} className="contact-form">
      
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          ref={emailRef}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact">Contact Number</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          placeholder="Enter your contact number"
          ref={contactRef}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Write your message..."
          ref={messageRef}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</div>
    </>
  )
}

export default ContactFormUncontrolledRef