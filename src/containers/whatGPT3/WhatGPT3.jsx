import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Sigma Tech?" 
      text="Build the highest productivity teams and leverage the largest Open AI network ever built. Harness the power of Data and Cloud technology " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Source the best technology for development & your team. 
      Unlock possibilities for developers with open AI today</h1>
      <p>Explore</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Web & Data Science" text="For beginners or experienced developers, build the future today" />
      <Feature title="Finance" text="For curious or experienced professionals, optimize your portfolio, research, and strategy today" />
      <Feature title="Learn More" text="Learn more about free resources for your organization" />
    </div>
  </div>
);

export default WhatGPT3;
