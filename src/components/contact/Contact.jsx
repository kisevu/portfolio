import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {FcPhone} from 'react-icons/fc';
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
 const form=useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_kgamjgk', 'template_cpduyt9', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>amedakevin@gmail.com</h5>
           <a href="mailto:amedakevin@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FcPhone className='contact__option-icon'/>
           <h4>Call Me</h4>
           <h5>Phone: +254797761742</h5>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
           <h4>LinkedIn</h4>
           <h5>ameda-kevin</h5>
           <a href="https://www.linkedin.com/in/ameda-kevin/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
           <h4>WhatsApp</h4>
           <h5>+254797761742</h5>
           <a href="https://api.whatsapp.com/send?phone+2547761742" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name...' required />
          <input type="text" name='email' placeholder='Your email address...' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact