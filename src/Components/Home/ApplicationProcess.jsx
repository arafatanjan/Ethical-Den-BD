import React from 'react';
import "./ApplicationProcess.css"

const ApplicationProcess = () => {

    const steps = [
        { id: 1, title: 'Clients profile review', icon: 'src/assets/icon/mingcute_profile-line.png' }, 
        { id: 2, title: 'Onboarding meeting', icon: 'src/assets/icon/fluent_device-meeting-room-remote-20-regular.png' }, 
        { id: 2, title: 'University Search', icon: 'src/assets/icon/wpf_search.png' }, 
        { id: 4, title: 'Statement of purpose/CV review and edit', icon: 'src/assets/icon/pepicons-pencil_cv.png' }, 
        { id: 5, title: 'University Shortlist', icon: 'src/assets/icon/mdi_university-outline.png' }, 
        { id: 6, title: 'University application', icon: 'src/assets/icon/carbon_application-web.png' }, 
        { id: 7, title: 'Arranging mock interview', icon: 'src/assets/icon/carbon_data-class.png' }, 
        { id: 8, title: 'Visa application for submission', icon: 'src/assets/icon/ri_visa-line.png' }, 
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