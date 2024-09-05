import React from 'react';
import "./ApplicationProcess.css"
import img5 from "../../assets/icon/mingcute_profile-line.png";
import img6 from "../../assets/icon/fluent_device-meeting-room-remote-20-regular.png";
import img7 from "../../assets/icon/wpf_search.png";
import img8 from "../../assets/icon/pepicons-pencil_cv.png";
import img9 from "../../assets/icon/mdi_university-outline.png";
import img10 from "../../assets/icon/carbon_application-web.png";
import img11 from "../../assets/icon/carbon_data-class.png";
import img12 from "../../assets/icon/ri_visa-line.png";

const ApplicationProcess = () => {

    const steps = [
        { id: 1, title: 'Clients profile review', icon: img5 }, 
        { id: 2, title: 'Onboarding meeting', icon: img6}, 
        { id: 3, title: 'University Search', icon: img7 }, 
        { id: 4, title: 'Statement of purpose/CV review and edit', icon: img8 }, 
        { id: 5, title: 'University Shortlist', icon: img9 }, 
        { id: 6, title: 'University application', icon: img10 }, 
        { id: 7, title: 'Arranging mock interview', icon: img11 }, 
        { id: 8, title: 'Visa application for submission', icon: img12 }, 
      ];
    
    return (
        <div className="application-processes">
        <h2>
          Our <span className="highlight">Application Process</span>
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
  
        <div className="process-flow">
          {steps.slice(0, 5).map(step => (
            <div key={step.id} className="process-step">
              <img src={step.icon} alt="Step Icon" className="step-icon" />
              <p className="step-title">{step.title}</p>
            </div>
          ))}
        </div>
  
        <div className="secondary-process-flow">
          {steps.slice(5, 8).map((step, index) => (
            <div key={step.id} className={`process-step ${index === 2 ? 'visa-step' : ''}`}>
              <img src={step.icon} alt="Step Icon" className="step-icon" />
              <p className="step-title">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ApplicationProcess;