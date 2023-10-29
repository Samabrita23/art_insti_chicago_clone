// Blogs.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Blogs.css';

interface Blog {
  id: number;
  api_model: string;
  image_url: string;
  title: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const blogsImage='https://artic-web.imgix.net/20829339-459c-4e4f-83cf-861efedcaab4/ex_tools-of-trade_main_480h_0.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C';
  
  
  useEffect(() => {
    // Fetch blogs from API
    fetch('https://api.artic.edu/api/v1/articles')
      .then((response) => response.json())
      .then((data) => setBlogs(data.data.slice(0, 5))) // Limit to 5 blogs
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <div className="blogs-heading">BLOG</div>
        <Link to="/browse" className="see-more-link">Browse all articles ›</Link>
      </div>
      
      <div className="columns">
        <div className="column column1">
          {blogs.length > 0 && (
            <Link to={`/${blogs[0].api_model}/${blogs[0].id}`} key={blogs[0].id} className="blog-card">
              <img src={blogsImage} alt={blogs[0].title} loading='lazy' />
              <div className="blog-api-model">{blogs[0].api_model}</div>
              <div className='blog-title'>{blogs[0].title}</div>
            </Link>
          )}
        </div>
        
        <div className="column column2">
          {blogs.slice(1, 3).map(blog => (
            <Link to={`/${blog.api_model}/${blog.id}`} key={blog.id} className="blog-card">
              <img src={blogsImage} alt={blog.title} loading='lazy' />
              <div className="blog-api-model">{blog.api_model}</div>
              <div className="blog-title">{blog.title}</div>
            </Link>
          ))}
        </div>

        <div className="column column3">
          {blogs.slice(3, 5).map(blog => (
            <Link to={`/${blog.api_model}/${blog.id}`} key={blog.id} className="blog-card">
              <img src={blogsImage} alt={blog.title} loading='lazy' />
              <div className="blog-api-model">{blog.api_model}</div>
              <div className='blog-title'>{blog.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

