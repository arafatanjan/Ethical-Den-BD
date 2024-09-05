import React from 'react';
import "./StudentSay.css"

const testimonials = [
    {
      id: 1,
      name: 'Lisa Dowen',
      role: 'Student',
      testimonial:
        'We are the representatives of more than 30+ universities in Australian countries and our admission.',
      image: 'path_to_image1', 
      rating: 5,
    },
    {
      id: 2,
      name: 'Lisa Dowen',
      role: 'Student',
      testimonial:
        'We are the representatives of more than 30+ universities in Australian countries and our admission.',
      image: 'path_to_image2', 
      rating: 5,
    },
    {
      id: 3,
      name: 'Lisa Dowen',
      role: 'Student',
      testimonial:
        'We are the representatives of more than 30+ universities in Australian countries and our admission.',
      image: 'path_to_image3', 
      rating: 5,
    },
  ];

const StudentSay = () => {
    return (
        <div className="student-testimonials">
        <h2>
          <span className="highlight">What’s</span> Our student say
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
  
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">“{testimonial.testimonial}”</p>
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}{' '}
                {/* Displays the rating in stars */}
              </div>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} photo`}
                  className="testimonial-image"
                />
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default StudentSay;