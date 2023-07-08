import { useRef, useState } from "react";
import "./contact.css";
import emailjs from 'emailjs-com';
import { useContext } from "react";
import { ThemeContext } from '../../context';

export default function Contact() {

  const theme = useContext(ThemeContext).state.darkMode;

  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [formSubject, setFormSubject] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_aagbgqd', 
      'template_c406s8l', 
      formRef.current, 
      'user_KBdCFErbshzn0SBde49T7')
      .then((result)=>{
        console.log(result.text);
        handleSentNotification();
        clearFields();
      }, (error)=>{
        console.log(error.text);
      });
  }

  const clearFields = () => {
    setFormSubject("");
    setFormEmail("");
    setFormMessage("");
  }

  const handleSentNotification = () => {
    setDone(true);
    setTimeout(()=>{setDone(false)}, 3000);
  }

  return (
    <div className="contact" data-theme={theme}>
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">
            Let's connect
          </h1>
          <div className="contact-social-wrapper">
            <a 
              className="link" 
              href="https://github.com/ajaramillo6">
              <i className="contact-social-i fa-brands fa-github-square"></i>
            </a>
            <a 
              className="link" 
              href="https://www.linkedin.com/in/alvaro-jaramillo-05131297/">
              <i className="contact-social-i fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="contact-icon fa-solid fa-envelope"></i>
              ajaramillo2293@gmail.com
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>Want to leave a message? </b>
            Please complete the below form and thank you so much for reaching out.
          </p>
          <form 
            className="contact-form" 
            ref={formRef} 
            onSubmit={handleSubmit}>
            {formSubject ?
              <input 
                className="contact-form-input" 
                type="text" 
                placeholder="Subject" 
                name="subject" 
                onChange={(e)=>setFormSubject(e.target.value)} 
                /> :
              <input 
                className="contact-form-input" 
                type="text" 
                placeholder="Subject" 
                name="subject" 
                value={formSubject} 
                onChange={(e)=>setFormSubject(e.target.value)} 
                />
            }
            {formEmail ?
              <input 
                className="contact-form-input" 
                type="text" 
                placeholder="Email" 
                name="email" 
                onChange={(e)=>setFormEmail(e.target.value)} 
                /> :
              <input 
                className="contact-form-input" 
                type="text" 
                placeholder="Email" 
                name="email" 
                value={formEmail} 
                onChange={(e)=>setFormEmail(e.target.value)} 
                />
            }
            {formMessage ?
              <textarea 
                className="contact-form-textarea" 
                name="message" 
                rows="5" 
                placeholder="Message" 
                onChange={(e)=>setFormMessage(e.target.value)}>
              </textarea> :
              <textarea 
                className="contact-form-textarea" 
                name="message" 
                rows="5" 
                placeholder="Message" 
                value={formMessage} 
                onChange={(e)=>setFormMessage(e.target.value)}>
              </textarea>
            }
            <button 
              className="contact-form-btn" 
              type="submit" >
              Send
              <i className="contact-form-i fa-solid fa-paper-plane"></i>
            </button>
            {done &&
              <div className="confirmation">Thank you!</div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}
