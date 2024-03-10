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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault()

  //     emailjs.send(
  //         import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
  //         import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
  //         formData,
  //         import.meta.env.VITE_APP_EMAIL_USER_ID
  //     )
  //     .then((response) => {
  //         console.log("success", response)
  //     })
  //     .catch((error) => {
  //         console.log("Error", error)
  //     })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataForSubmission = new FormData();
    formDataForSubmission.append("name", formData.name);
    formDataForSubmission.append("email", formData.email);
    formDataForSubmission.append("subject", formData.subject);
    formDataForSubmission.append("message", formData.message);

    // fetch("https://script.google.com/macros/s/AKfycbxNt_HbNk8QObtvLkYK8_JmSVy1x1MhGz7mMVF2lREHkn-5YTpzKs2TEGzaTEVullzySA/exec", {
    //   method: "POST",
    //   body: formDataForSubmission
    // })
    // .then(reponse => {
    //   console.log(Promise.all(reponse.json()), "success");
    // })
  
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxNt_HbNk8QObtvLkYK8_JmSVy1x1MhGz7mMVF2lREHkn-5YTpzKs2TEGzaTEVullzySA/exec",
        formDataForSubmission
      );
  
      console.log("Success", response.data.body);
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
          Please use the below form to get in contact. Alternatively use the
          LinkedIn Icon to contact me there.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="sender-details">
            <input
              value={formData.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}></input>
            <input
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}></input>
          </div>
          <div className="message-details">
            <input
              value={formData.subject}
              name="subject"
              placeholder="Subject"
              onChange={handleChange}></input>
            <textarea
              value={formData.message}
              name="message"
              className="message-body"
              placeholder="Message"
              onChange={handleChange}></textarea>
          </div>
          <button className="cv-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
