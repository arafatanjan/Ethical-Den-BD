import React from 'react';
import './CostOfEducation.css';
import img24 from "../../assets/image25.png";

const CostOfEducation = () => {
  return (
    <div className="cost-education-container">
        <div className="image-container">
        <img src={img24} alt="Cost of Education" className="cost-image" />
      </div>
      <div className="cost-education-content">
        <h2 className="cost-title">
          <span className="highlight">Cost</span> of education
        </h2>
        <p className="description">
          In the U.S., tuition fees vary based on the state, the university funding model,
          and the student’s country of origin. So, listing an average is a rather difficult task.
          However, thanks to the folks at College Board, they’ve rendered an estimate of last year’s
          average tuition costs, which will roughly reflect the next few years.
        </p>
        <ul className="cost-list">
          <li><span className="bold">Total Expenses 41535</span></li>
          <li>Tuition Fees for one-year (Indicative) 25000</li>
          <li>Living and Accommodation 15000</li>
          <li>Airfare from India to USA 1000</li>
          <li>Visa Fees (Visa & SEVIS) 535</li>
        </ul>
      </div>
      
    </div>
  );
};

export default CostOfEducation;
