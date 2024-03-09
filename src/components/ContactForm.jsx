import React, { useState } from 'react'
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com'

function ContactForm() {

    
    const [contactRef, contactInView] = useInView({
        triggerOnce: true,
      });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send(
            import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
            import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
            formData,
            
                import.meta.env.VITE_APP_EMAIL_USER_ID
            
        )
        .then((response) => {
            console.log("success", response)
        })
        .catch((error) => {
            console.log("Error", error)
        })
    }

  return (
    <div className="main-content" id="contact-me">
          <div className="contact-elements" ref={contactRef}>
            <div className="typewriter">
              <h2 className={contactInView ? "animate" : ""}>Contact Me.</h2>
            </div>
            <p className="contact-text">
              Please use the below form to get in contact. Alternatively use the
              LinkedIn Icon to contact me there.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="sender-details">
              <input value={formData.name} name='name' placeholder="Name" onChange={handleChange}></input>
              <input value={formData.email} name='email' placeholder="Email" onChange={handleChange}></input>
              </div>
              <div className="message-details">
              <input value={formData.subject} name='subject' placeholder="Subject" onChange={handleChange}></input>
              <textarea value={formData.message} name='message' className="message-body" placeholder="Message" onChange={handleChange}></textarea>
              </div>
              <button className="cv-btn" type="submit">Send</button>
            </form>
          </div>
        </div>
  )
}

export default ContactForm