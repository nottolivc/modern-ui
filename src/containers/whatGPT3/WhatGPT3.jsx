import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="The Largest AI Ever Built. Open for you now to leverage today." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Unlock the possibilities of the largest AI network today and get started building the future of the Web.</h1>
      <p>Explore</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Web 3.0" text="For beginners or experienced developers, build the future today." />
      <Feature title="Crypto Integration" text="For curious or experienced Traders, optimize your portfolio today." />
      <Feature title="Learn More" text="Learn more about resources and libraries to optimize and/or get started" />
    </div>
  </div>
);

export default WhatGPT3;
