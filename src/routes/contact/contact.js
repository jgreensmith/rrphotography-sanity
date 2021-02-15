import React from 'react';
import emailjs from 'emailjs-com';

import './contact.scss';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_p7wv2ha', e.target, 'user_N1PrmKzVf70FLrhIDDhiR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <section className="section">
        <div className="block-container">
            <h1 className="main-title heading">Contact Me</h1>
            <div className="contact-container">
                <div className="line"></div>
                <div className="contact-info-wrapper">
                    <p className="contact-info">
                        Please get in touch if you would like to know more about my work.
                        <br></br>
                        <br></br>
                        You can find me on Instagram @rebeccareynolds935
                        <br></br>
                        <br></br>
                        Phone 01544 232785
                        <br></br>
                        <br></br>
                        Leave a message and I will get back to you as soon as I can, usually within 2 working days.
                    </p>
                </div>
                <div className="line"></div>
                <div className="form-wrapper">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input className="form-item" type="hidden" name="contact_number" />
                        <label className="form-item">Name</label>
                        <input className="form-item" type="text" name="user_name" />
                        <label className="form-item">Email</label>
                        <input className="form-item" type="email" name="user_email" />
                        <label className="form-item">Message</label>
                        <textarea className="form-item" name="message" />
                        <div className="button-wrapper">
                            <input className="form-button" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
      </section>
    
  );
}