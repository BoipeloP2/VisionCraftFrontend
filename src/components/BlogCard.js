import React from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../images/blog-1.jpg';

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={BlogImage} className='img-fluid w-100' alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">05 May 2023</p>
        <h5 className="title">Be Clear See Clear</h5>
        <p className="description">With our vision, you will see clear and be clear.</p>
        <Link className="button" to="/blog/:id">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
