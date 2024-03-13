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
  const [sent, setSent] = useState(false)
  const [isFormEmpty, setIsFormEmpty] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasEmptyField = false;

    for (const key in formData) {
      if (!formData[key]) {
        hasEmptyField = true;
        break; 
      }
    }
  
    if (hasEmptyField) {
      setIsFormEmpty(true);

      setTimeout(() => {
        setIsFormEmpty(false)
      }, 3000)
      return;
    }
  
    const formDataForSubmission = new FormData();

    Object.keys(formData).forEach(key => {
      formDataForSubmission.append(key, formData[key])
    })

  
    try {
      setIsFormEmpty(false)
      setSent(false)
      setIsSending(true)
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxNt_HbNk8QObtvLkYK8_JmSVy1x1MhGz7mMVF2lREHkn-5YTpzKs2TEGzaTEVullzySA/exec",
        formDataForSubmission
      );


  
      console.log("Success", response.data.body);

      setSent(true)
      setError("")
      setIsSending(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      setError(error.body.data)
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
          Send me a message and I'll get back to you ASAP! Alternatively, contact me via the email below.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="sender-details">
            <input disabled={isSending}
              value={formData.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}></input>
            <input disabled={isSending}
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}></input>
          </div>
          <div className="message-details">
            <input disabled={isSending}
              value={formData.subject}
              name="subject"
              placeholder="Subject"
              onChange={handleChange}></input>
            <textarea disabled={isSending}
              value={formData.message} //`cv-btn ${isSending ? 'sending' : ''}`
              name="message"
              className="message-body"
              placeholder="Message"
              onChange={handleChange}></textarea>
          </div>
          <button className={isFormEmpty || error ? "cv-btn error" : `cv-btn ${isSending ? 'sending' : ''}`} type="submit" disabled={isSending}>
            {isSending ? "Sending..." : sent ? "Sent!" : "Send"}
          </button>
          <p className={`field-empty-error ${!isFormEmpty ? 'fade-out' : ''}`}>{error ? `${error}` : "Please fill all fields!"}</p>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
