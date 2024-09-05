import React from 'react';
import "./PopularUniversities.css"
import img15 from "../../assets/Frame 130.png";
import img16 from "../../assets/Frame 131.png";
import img17 from "../../assets/Frame 132.png";
import img18 from "../../assets/Frame 133.png";
import img19 from "../../assets/Frame 134.png";
import img20 from "../../assets/Frame 135.png";

const PopularUniversities = () => {
    const universities = [
        {
          id: 1,
          logo: img15 
        },
        {
          id: 2,
          logo: img16 
        },
        {
          id: 3,
          logo: img17
        },
        {
          id: 4,
          logo: img18 
        },
        {
          id: 5,
          logo: img19 
        },
        {
          id: 6,
          logo: img20 
        }
      ];

    return (
        <div className="popular-universities">
      <h2>
        <span className="highlight">Popular</span> Universities
      </h2>

      <div className="university-grid">
        {universities.map(uni => (
          <div key={uni.id} className="university-card">
            <img src={uni.logo} alt='university'/>
            
          </div>
        ))}
      </div>

      <button className="view-more-button">View More</button>
    </div>
    );
};

export default PopularUniversities;