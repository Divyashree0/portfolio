import "../css/Contact.css";
import loader from "../icon/loader.svg";
import phone from "../icon/phone.svg";
import mail from "../icon/mail.svg";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact(){
  const [loader1, setloader1] = useState();
  const form = useRef();
  const sendEmail =(e) =>{
    e.preventDefault();
    setloader1(true);
    emailjs.sendForm('service_o3a7lxb', 'template_hadgnjk', form.current, '0V8Qk1_vZyY_hLFzK')
      .then((result) => {
          alert("message sent");
          setloader1(false);
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
      <label>Name</label>
      <input type="text" name="user_name" /><br/>
      <label>Email</label>
      <input type="email" name="user_email" /><br/>
      <label>Message</label>
      <textarea name="message" /><br/>
      {!loader1?
      (<input type="submit" value="Send" />):(
      <img src={loader} alt="loader"/>)}<br/>
    </form></div>
    <div class="Contact-info">
         <h3>Contact Information</h3>
        <p> <img src={phone} alt="html" class="icon" />7338037424</p>
        <p><img src={mail} alt="html" class="icon" />Divyashreem2020@gmail.com</p>
    </div></div>
  );
}
export default Contact;
