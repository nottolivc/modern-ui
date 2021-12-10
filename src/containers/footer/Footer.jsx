import React from 'react';
//import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Join the Future Today</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Get Started</p>
    </div>

    <div className="gpt3__footer-links">
      {/* <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Open Source   https://openai.com/blog/gpt-3-apps<br /></p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Home</p>
        <p>Social Media</p>
        <p>Resources</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Careers</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Questions</h4>
        <p>services@sigmabox.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>(c) Sigma Tech Services, 2021. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
