import React from 'react'

import '../Contact/Contact.css'

import theme_pattern from "../../assets/theme_pattern.svg"

import mail_icon from "../../assets/mail_icon.svg"

import location_icon from "../../assets/location_icon.svg"

import call_icon from "../../assets/call_icon.svg"







export default function  Contact() {


  return (
    <div class='Contact'>
        <div className="contact-title">
            <h1> Get in touch!</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take new projects, so feel free to contact!</p>

                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>ykankal@asu.edu</p>
                        
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+1 602-565-5915</p>
                        </div>
                    <div className="contact-detail">

                    <img src={location_icon} alt="" /> <p>Tempe, Arizona</p>
                        
                    </div>
                </div>
            </div>

            <form className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name '></input>
                <label htmlFor=''>Your Email Address</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor=''>Write Your Message</label>
                <textarea name='message' rows='8' placeholder='Enter Your Message'></textarea>
                <button className='contact-submit' type='submit'> Submit Now</button>
            </form>

        </div>





    </div>
  )
}
