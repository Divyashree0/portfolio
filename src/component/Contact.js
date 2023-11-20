import "../css/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o3a7lxb', 'template_hadgnjk', form.current, '0V8Qk1_vZyY_hLFzK')
      .then((result) => {
          alert("message sent");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <h2>Contact</h2>
      <div className="container1">
        <h3>Send us a message</h3>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" /><br/>
      <label>Email:</label>
      <input type="email" name="user_email" /><br/>
      <label>Message:</label>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" /><br/>
    </form></div></div>
  );
}
export default Contact;
