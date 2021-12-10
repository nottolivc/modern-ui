import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';


const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">SIGMA Box Tech Services</h1>
      <p>Build the best teams. Tech consulting and candidate sourcing for top technology firms. 
        Leverage all of the latest bleeding edge tech for building the future of your company on the web and it's developers. 
        Learn to develop tools with the largest AI & ML library ever built today as a engineering team, hiring manager, 
        or entrepreneur across the financial and tech sectors.</p>
      <a href="services@sigmabox.com"><br /><br /><p>Contact Us for FREE Consultation</p></a>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <p style={{'color': '#444'}}>Source from over 100,000 data points in the our propietary database.</p>
      </div>
    </div>

    {/* <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
  </div>
);

export default Header;
