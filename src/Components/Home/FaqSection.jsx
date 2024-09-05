import React from 'react';
import "./FaqSection.css";
import { useState } from 'react'
import img25 from "../../assets/image 18.png";
import img26 from "../../assets/Image 12.png";
import img27 from "../../assets/image 12 (1).png";
import img28 from "../../assets/image 12 (2).png";

const FaqSection = () => {
    const blogs = [
        {
          id: 1,
          date: 'July 24, 2024',
          title: 'Emotional Intelligence in Education Building',
          image: img26, 
          comments: 25
        },
        {
          id: 2,
          date: 'July 24, 2024',
          title: 'Emotional Intelligence in Education Building',
          image: img27, 
          comments: 25
        },
        {
          id: 3,
          date: 'July 24, 2024',
          title: 'Emotional Intelligence in Education Building',
          image: img28, 
          comments: 25
        }
      ];
    
      function Accordion({ title, children }) {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleAccordion = () => {
          setIsOpen(!isOpen);
        };
      
        return (
          <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
              <span>{title}</span>
              <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
          </div>
        );
      }

    return (
        <>
        <section className="faq-section">
      <h2>Study in <span>USA FAQ's</span></h2>
      <div className="faq-section-part">
       
        <div className='faq-content'>
        <Accordion title="Can you work when study in USA">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Accordion>
      <Accordion title="Can you work when study in USA" />
      <Accordion title="Can you work when study in USA" />
      <Accordion title="Can you work when study in USA" />
      <Accordion title="Can you work when study in USA" />
     
        </div>
        <div className="faq-image">
          <img src={img25} alt="FAQ Illustration" />
        </div>
      </div>
      </section>
      


      <section className="blog-section">
      <h2>
        Our Latest <span className="highlight">Blog</span>
      </h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt="Blog" className="blog-image" />
            <div className="blog-details">
              <p className="blog-date">
                
                <i class="fa fa-calendar" aria-hidden="true"></i> {blog.date}
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-footer">
                <p><i className="fa fa-user" ></i> Back Theme</p>
                <p><i className="fa fa-comments"></i> {blog.comments} Comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="browse-button">Browse More Blog<span></span></button>
    </section>
    </>
    );
};

export default FaqSection;