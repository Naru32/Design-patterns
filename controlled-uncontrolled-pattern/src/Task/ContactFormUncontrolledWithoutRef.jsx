import React from 'react'

function ContactFormUncontrolledWithoutRef() {
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const data = new FormData(e.target)
        console.log(data.get('email'));
        console.log(data.get('contact'));
        console.log(data.get('message'));
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
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact">Contact Number</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          placeholder="Enter your contact number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Write your message..."
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</div>
    </>
  )
}

export default ContactFormUncontrolledWithoutRef