import React from 'react'
import MainHeader from '../Components/MainHeader'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";



const ContactUs = () => {
  return (
    <div>
        <MainHeader/>
        <section className='cont-screen'>
          

            <div className='cont-r'>
              <form className='form'>
                <h2>We'd love to hear from you</h2>
                <h5>Reach out and we'll respond within 24 hours</h5>

                <section>
                  <div>
                    <p>NAME</p>
                    <input type="text" placeholder='Enter your name'/>
                  </div>

                  <div>
                    <p>EMAIL</p>
                    <input type="email" placeholder='mail@domain.com'/>
                  </div>

                  <div>
                    <p>PHONE</p>
                    <input type="tel" placeholder='Phone Number'/>
                  </div>

                  <div>
                    <p>HAVE YOU GOTTEN THE APP?</p>
                    <select name="" id="">
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>

                  <div className='message'>
                    <p>MESSAGE</p>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                  </div>

                  <button type="submit">Send</button>

                
                </section>

              </form>
              
              <div className='contact-us'>
                <span>
                  <a href="mailto:info@slashpoint.ng">
                    <TfiEmail className='con-icon'/>
                    info@slashpoint.ng
                  </a>

                </span>

                <span>
                  <a href="tel:+234 911 312 9622">
                    <FaPhone className='con-icon'/>
                    +234 911 312 9622
                  </a>

                </span>

              </div>

            </div>

          


        </section>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ContactUs