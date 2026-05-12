import React, { useState } from 'react'
import './Controlledform.css';

function ContactFormControlled() {
    const [formData,setFormData] = useState({
        email:'',
        contact:'',
        message : ''
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
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
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact">Contact Number</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          placeholder="Enter your contact number"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Write your message..."
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</div>
    </>
  )
}

export default ContactFormControlled