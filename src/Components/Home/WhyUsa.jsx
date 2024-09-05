import React from 'react';
import "./WhyUsa.css"

const WhyUsa = () => {
    return (
        <section className="why-study-usa">
        <div className="why-study-usa-container">
          <div className="why-study-usa-image">
            <img src="src/assets/image21.png" alt="Why Study in USA?" />
          </div>
          <div className="why-study-usa-content">
            <h2 className="why-study-title">
              Why Study <span className="highlight">in USA?</span>
            </h2>
            <p className="why-study-description">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
            </p>
            <h3 className="quick-facts-title">Quick facts</h3>
            <ul className="quick-facts-list">
              <li><span className="star">★</span> USA hosts more than a million international students</li>
              <li><span className="star">★</span> Over 25% of world's top 100 universities are in the USA</li>
              <li><span className="star">★</span> Post-study stay back visas (OPT) up to 3 years for STEM programs</li>
              <li><span className="star">★</span> Internships (CPT) up to 12 months while studying</li>
              <li><span className="star">★</span> Merit Based & Need Based Scholarships</li>
            </ul>
            <a href="#" className="see-more-button">See More →</a>
          </div>
        </div>
      </section>
    );
};

export default WhyUsa;