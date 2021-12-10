import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Register and Get Started</h4>
      <h1 className="gradient__text">Machine Learning, beyond human imagination?</h1>
      <p>Combine the largest AI network ever built and develop your potential in Finance, Engineering, and More Today </p>
      <h4>What is the Future of Data Science?</h4>
    </div>
  </div>
);

export default Possibility;
