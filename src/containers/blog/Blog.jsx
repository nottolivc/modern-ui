import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Follow us...</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="March, 2021" text="Maximize productivity for your team" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="January 21, 2021" text="The developer hiring process is broken, and how to solve it" />
        <Article imgUrl={blog03} date="January 21, 2021" text="The future of web development in the financial sector" />
        <Article imgUrl={blog04} date="January 21, 2021" text="Why GPT-3 and Open AI is the future, and it's happening now" />
        <Article imgUrl={blog05} date="January 21, 2021" text="Does sourcing good candidates have to be so hard?" />
      </div>
    </div>
  </div>
);

export default Blog;
