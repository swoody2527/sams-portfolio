import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import axios from "axios";

function ContactForm() {
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataForSubmission = new FormData();

    Object.keys(formData).forEach(key => {
      formDataForSubmission.append(key, formData[key])
    })

  
    try {
      setIsSending(true)
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxNt_HbNk8QObtvLkYK8_JmSVy1x1MhGz7mMVF2lREHkn-5YTpzKs2TEGzaTEVullzySA/exec",
        formDataForSubmission
      );


  
      console.log("Success", response.data.body);
      setIsSending(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.error("Error occurred", error);
    }
  };

  return (
    <div className="main-content" id="contact-me">
      <div className="contact-elements" ref={contactRef}>
        <div className="typewriter">
          <h2 className={contactInView ? "animate" : ""}>Contact Me.</h2>
        </div>
        <p className="contact-text">
          Send me a message and I'll get back to you ASAP! Alternatively, contact me via the details below.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="sender-details">
            <input required
              value={formData.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}></input>
            <input required
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}></input>
          </div>
          <div className="message-details">
            <input required
              value={formData.subject}
              name="subject"
              placeholder="Subject"
              onChange={handleChange}></input>
            <textarea required
              value={formData.message}
              name="message"
              className="message-body"
              placeholder="Message"
              onChange={handleChange}></textarea>
          </div>
          <button className={`cv-btn ${isSending ? 'sending' : ''}`} type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
