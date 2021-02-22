import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Brown Boy Cooking © 2021</small>
          <div class='social-icons'>
             <a target="_blank" href="https://www.facebook.com/kiritpendyala">
              <i class="fab fa-facebook"></i>
             </a>

             <a target="_blank" href="https://instagram.com/kirit_pendyala?igshid=11bprgh6ujo13">
              <i class="fab fa-instagram"></i>
             </a>

             <a target="_blank" href="https://www.linkedin.com/in/kirit-pendyala/">
              <i class="fab fa-linkedin"></i>
             </a>

             <a target="_blank" href="https://github.com/kirit-pendyala">
              <i class="fab fa-github"></i>
             </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
