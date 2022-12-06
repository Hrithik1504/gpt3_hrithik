import React from 'react';
import gpt3logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Machine Gaming, ALl right reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Oerons</p>
          <p>Social Media</p>
          <p>Couters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Machine Gaming</p>
          <p>+91 - 8475639182</p>
          <p>warm9087@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@ 2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
