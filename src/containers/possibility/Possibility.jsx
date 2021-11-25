import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Signup Today and Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond human imagination</h1>
      <p>Combine the largest AI network ever built with web 3.0 to unlock and develop your potential in Finance, Engineering, and More Today. </p>
      <h4>Request Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
