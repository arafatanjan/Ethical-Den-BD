import React from 'react';
import './USAOverview.css';

const USAOverview = () => {
  return (
    <div className="usa-overview-container">
      <h2 className="title">USA At a Glance</h2>
      <table className="usa-overview-table">
        <thead>
          <tr>
            <th>Course Duration</th>
            <th>Intake</th>
            <th>Application Fee</th>
            <th>Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4 Years (Bachelor’s)<br />2 Years (Master’s)</td>
            <td>January, May, September</td>
            <td>40 To 200 (USD)</td>
            <td>GRE/GMAT + IELTS/TOEFL/PTE, Academics-Above 55%</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Language Proficiency</th>
            <th>Tuition Fee (Yearly)</th>
            <th>Living Cost (Yearly)</th>
            <th>Visa Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IELTS-6+, TOEFL-70+, Duolingo-90+, PTE-50+</td>
            <td>10000 To 55000 (USD)</td>
            <td>10000 To 18000 (USD)</td>
            <td>160 (USD)<br />SEVIS Fee 350 (USD)</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Air Ticket</th>
            <th>Processing Time</th>
            <th>Part Time Work</th>
            <th>Post Study Work Permit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100000 To 150000 (BDT)</td>
            <td>9-12 Months</td>
            <td>20 Hrs (per Week)</td>
            <td>12 Month For All Programs, 12 Month+ 24 Months Extension For STEM (Science, Tech, Engg & Maths)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default USAOverview;
