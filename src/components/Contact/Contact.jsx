import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxzfxb7', 'template_1d2mj52', form.current, 'MmQPZ8xRj_DM_qoiQ')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact us</span>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='message'/>
                <input type="submit" value='Send' className='button' />
                <span style={{color: 'green'}}>{done && 'Thank for contactin us!'}</span>
                <div className="blur s-blur1" style={{background: 'rgb(238 210 255)', top: '20rem', left: '-15rem'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact