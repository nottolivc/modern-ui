import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import CustomChatbot from './CustomChatbot';
import './App.css';

const App = () => (
  <div className="App">
  <div className="box animate fadeInDownBig seven">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <div className="chat">
    <p style={{color: '#444'}}>Chatbot for basic info</p>
    <CustomChatbot />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  </div>
);

export default App;
