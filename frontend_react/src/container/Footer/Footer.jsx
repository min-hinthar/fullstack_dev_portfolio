import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
      <h2 className='head-text'>
        Let's <span> chat </span> over Burmese <span> Tea </span>!
      </h2>
  {/* Cards for Email and Tel */}
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a 
            href='mailto:min@mandalaymorningstar.com' 
            className='p-text'
          >
            Min@MandalayMorningStar.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a 
            href='tel: +1(317)748-7194' 
            className='p-text'
          >
            +1 (317) 748-7194
          </a>
        </div>
      </div>
  {/* Contact Form */}
    {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input 
            className='p-text'
            type='text'
            placeholder='Name...'
            name='name'
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className='app__flex'>
          <input 
            className='p-text'
            type='email'
            placeholder='Email...'
            name='email'
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Message...'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    :
      <div>
        <h3 className='head-text'>
          🥳 Thank you for reaching out to me! 🎉
        </h3>
      </div>
    }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact'
  );