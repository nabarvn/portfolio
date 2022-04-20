import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiTwitterLine} from 'react-icons/ri'
import {BsSignal} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>wagmi@nabarun.xyz</h5>
            <a href='mailto:wagmi@nabarun.xyz' target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiTwitterLine className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@nabarun</h5>
            <a href='https://twitter.com/nabarun' target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsSignal className='contact__option-icon' />
            <h4>Signal</h4>
            <h5>Nabarun</h5>
            <a href='https://signal.me/#p/+919163032559' target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End Of Contact Options */}

        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact