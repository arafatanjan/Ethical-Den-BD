import React from 'react';
import "./PopularUniversities.css"

const PopularUniversities = () => {
    const universities = [
        {
          id: 1,
          logo: 'src/assets/Frame 130.png' 
        },
        {
          id: 2,
          logo: 'src/assets/Frame 131.png' 
        },
        {
          id: 3,
          logo: 'src/assets/Frame 132.png' 
        },
        {
          id: 4,
          logo: 'src/assets/Frame 133.png' 
        },
        {
          id: 5,
          logo: 'src/assets/Frame 134.png' 
        },
        {
          id: 6,
          logo: 'src/assets/Frame 135.png' 
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