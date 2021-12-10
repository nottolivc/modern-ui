import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Institutional mass adoption of Python',
    text: 'Start now learning all about it and the benefits',
  },
  {
    title: 'How much does Institutional Finance and Big Tech care about Web 3.0?',
    text: 'Start learning from a business perspective...especially if you are in tech already',
  },
  {
    title: 'Sourcing and Hiring is Broken',
    text: 'Check out links below for more info about this market for sourcing with best practices',
  },
  {
    title: 'Requests',
    text: 'Email us for requests on including sourcing, hiring, and up-to-date developer trends',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Data Science and Web Development. Hire top professionals for your team today</h1>
      <p>Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
