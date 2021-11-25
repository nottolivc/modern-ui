import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Trust in the blockchain',
    text: 'Start now learning all about it and the benefits',
  },
  {
    title: 'What is Web 3.0?',
    text: 'Start learning from a business perspective especially if you are in tech already',
  },
  {
    title: 'Start learning about Crypto',
    text: 'Check out links below for more info about this gigantic disruptive market',
  },
  {
    title: 'Other',
    text: 'Email us for requests on new content and for more resources',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Start building your future today and take control of your new web portfolio.</h1>
      <p>Request Access and Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
