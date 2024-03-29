import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Learn How to Build the Future of the Web with GPT-3 OpenAI</h1>
      <p>Leverage the largest AI library ever built today as a developer, trader, or entrepreneur.
      <a href="https://cryptograph-gpt-3.netlify.app"><br /><br /><h2>Click Here to See Realtime Market Data (Traders)</h2></a></p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    {/* <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
  </div>
);

export default Header;
