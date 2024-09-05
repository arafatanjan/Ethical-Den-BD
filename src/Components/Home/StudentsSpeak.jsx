import React from 'react';
import "./StudentsSpeak.css";
import img from "../../../src/assets/Image.png";
import img1 from "../../../src/assets/Image (1).png";
import img2 from "../../../src/assets/Image13.png";


const StudentsSpeak = () => {
    const students = [
        {
          name: 'Rashmi Borah',
          university: 'Northeastern University, Boston',
          image: img,
        },
        {
          name: 'Rashmi Borah',
          university: 'Northeastern University, Boston',
          image: img1,
        },
        {
          name: 'Rashmi Borah',
          university: 'Northeastern University, Boston',
          image: img2,
        },
      ];
    return (
        <section>
        <div className="student-speak-section">
  <div className="student-speak-section-container">
    <div className="student-speak-section-background-image">
      <div style={{ marginTop: '' }}>
        <h2 className="section-title">
          <span style={{ color: 'white' }}>Student's</span> <span>Speak</span>
        </h2>
      </div>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="student-cards">
        {students.map((student, index) => (
          <div key={index} className={`student-card ${index === 1 ? 'larger-card' : ''}`}>
            <div className="student-image">
              <img src={student.image} alt={student.name} />
              <div className="play-button"></div>
            </div>
            <h3>{student.name}</h3>
            <p>{student.university}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="nav-buttons">
      <button className="prev-button" style={{ backgroundColor: '#e0b88d' }}>←</button>
      <button className="next-button">→</button>
    </div>
  </div>
</div>
</section>      
    );
};

export default StudentsSpeak;