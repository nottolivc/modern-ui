import React from 'react';
import { google, slack, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  
  <div className="gpt3__brand section__padding">
    <p style={{color: '#444'}}>Services built on tools from top companies: </p>
    <div>
      <img src={google} alt="" />
    </div>
    <div>
      <img src={slack} alt="" />
    </div>
    {/* <div>
      <img src={atlassian} alt="" />
    </div> */}
    <div>
      <img src={dropbox} alt="" />
    </div>
    <div>
      <img src={shopify} alt="" />
    </div>
  </div>
  
);

export default Brand;
