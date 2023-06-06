import React, { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9n9na4c', 'template_60p6799', form.current, 'pz86wUdVCTwgjiipB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Email" name='email' />
          <textarea placeholder="Message" name='message'></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP </span>}
        </form>
      </div>
    </div>
  );
};

