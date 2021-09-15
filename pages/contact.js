import React from 'react';
import emailjs from 'emailjs-com';

import styles from '../styles/Contact.module.scss';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <section className={styles.section}>
        <div className={styles['block-container']}>
            <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Contact Me</h1>
            <div className={styles['contact-container']}>
                <div className={styles.line}></div>
                <div className={styles['contact-info-wrapper']}>
                    <p className={styles['contact-info']}>
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
                <div className={styles.line}></div>
                <div className={styles['form-wrapper']}>
                    <form className={styles['contact-form']} onSubmit={sendEmail}>
                        <input className={styles['form-item']} type="hidden" name="contact_number" />
                        <label className={styles['form-item']}>Name</label>
                        <input className={styles['form-item']} type="text" name="user_name" />
                        <label className={styles['form-item']}>Email</label>
                        <input className={styles['form-item']} type="email" name="user_email" />
                        <label className={styles['form-item']}>Message</label>
                        <textarea className={styles['form-item']} name="message" />
                        <div className={styles['button-wrapper']}>
                            <input className={styles['form-button']} type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
      </section>
    
  );
}