import React, { useContext, useState } from "react";
import { useRef } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfhxe0c', 'template_l3yse4a', form.current, 'OEa8Mgt3GEMDrvvII')
      .then((result) => {
          console.log(result.text);
          setDone(true)

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-from">
        <div className="c-left">
            <div className="awesome"> 
            <span style = {{color : darkMode? "white" : ''}}> Get in Touch </span>
            <span> Contact me </span>
            <div className="blur s-blur1" style={{background : "#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">

            <form ref={form} onSubmit = {sendEmail} >
                <input type="text" className='user' name = "user_name" placeHolder="Name"/>
                <input type="email" className='user' name ="user_email" placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'> </textarea> 
                <input type="Submit" value="Send" className='button'/>
                <span> {done && "Thanks for Contact me!"} </span>
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>

        </div>
    </div>
  )
}

export default Contact