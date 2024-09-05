import React from 'react';
import './CareersIndustry.css';

const CareersIndustry = () => {
  return (
    <div className="careers-industry-container">
      <div className="content-section">
        <h2>
          <span className="highlight">Careers</span> & Industry
        </h2>
        <p>
          One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally.
          Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, 
          Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, 
          Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. 
          Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in 
          many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills and environmental quality.
        </p>
        <a href="#read-more" className="read-more-btn">
          Read More <span className="arrow">→</span>
        </a>
      </div>
      <div className="image-section">
        <img src="/src/assets/image28.png" alt="Careers & Industry" />
      </div>
    </div>
  );
};

export default CareersIndustry;
