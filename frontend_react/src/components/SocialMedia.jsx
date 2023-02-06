import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/minkkhant93/' target='_blank' rel='noreferrer'>
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href='https://github.com/min-hinthar' target='_blank' rel='noreferrer'>
                <BsGithub />
            </a>
        </div>
        <div>
            <a href='https://www.instagram.com/minkkhant/' target='_blank' rel='noreferrer'>
                <BsInstagram />
            </a>
        </div>
        <div>
            <a href='https://www.facebook.com/min.k.khant' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia