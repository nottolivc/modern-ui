import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Sigma Box?" text="Build the highest productivity teams and leverage the largest Open AI network ever built. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Source the best candidates for development & your team. 
      Unlock the possibilities of the largest AI network today.</h1>
      <p>Explore</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Web" text="For beginners or experienced developers, build the future today." />
      <Feature title="Finance" text="For curious or experienced Traders, optimize your portfolio today." />
      <Feature title="Learn More" text="Learn more about free resources for your organization" />
    </div>
  </div>
);

export default WhatGPT3;
