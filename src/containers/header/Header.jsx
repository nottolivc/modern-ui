import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';
//import CustomChatbot from '../../CustomChatbot';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">&Sigma;</h1><h1>Sigma Sourcing</h1>
      <h2 className="gradient__text">Leverage your productivity with deep learning and AI</h2>
      <p>Tech consulting and candidate sourcing for top technology and financial firms. 
        Leverage bleeding edge tech for building the future of your company on the web and it's developers. 
        Learn to use/develop tools with the largest AI & ML library ever built today as a engineering team, manager, 
        or entrepreneur across sectors</p>
      <a href="services@sigmabox.com">
        <p>Contact Us for FREE Consultation</p></a>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <p style={{'color': '#444'}}>Source from over 100,000 data points in the our propietary database</p>
      </div>
      {/* <div className="chat">
        <p style={{color: '#444'}}>Chatbot </p>
        <CustomChatbot />
      </div> */}
    </div>

    {/* <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
  </div>
);

export default Header;
