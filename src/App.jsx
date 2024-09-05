import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApplicationProcess from './Components/Home/ApplicationProcess'
import WhyUsa from './Components/Home/WhyUsa'
import PopularUniversities from './Components/Home/PopularUniversities'
import StudentSay from './Components/Home/StudentSay'
import USAOverview from './Components/Home/USAOverview'
import CostOfEducation from './Components/Home/CostOfEducation'
import Navbar from './Components/Home/Navbar'
import Banner from './Components/Home/Banner'
import CareersIndustry from './Components/Home/CareersIndustry'
import Footer from './Components/Home/Footer'


function App() {

  const steps = [
    { id: 1, title: 'Clients profile review', icon: 'path_to_icon1' }, // Replace with actual icon path
    { id: 2, title: 'Onboarding meeting', icon: 'path_to_icon2' }, // Replace with actual icon path
    { id: 3, title: 'University search', icon: 'path_to_icon3' }, // Replace with actual icon path
    { id: 4, title: 'Statement of purpose/CV review and edit', icon: 'path_to_icon4' }, // Replace with actual icon path
    { id: 5, title: 'University Shortlist', icon: 'path_to_icon5' }, // Replace with actual icon path
    { id: 6, title: 'University application', icon: 'path_to_icon6' }, // Replace with actual icon path
    { id: 7, title: 'Arranging mock interview', icon: 'path_to_icon7' }, // Replace with actual icon path
    { id: 8, title: 'Visa application for submission', icon: 'visa_icon' }, // Visa step is emphasized
  ];

  const students = [
    {
      name: 'Rashmi Borah',
      university: 'Northeastern University, Boston',
      image: '/src/assets/Image.png',
    },
    {
      name: 'Rashmi Borah',
      university: 'Northeastern University, Boston',
      image: '/src/assets/Image (1).png',
    },
    {
      name: 'Rashmi Borah',
      university: 'Northeastern University, Boston',
      image: '/src/assets/Image13.png',
    },
  ];

  const blogs = [
    {
      id: 1,
      date: 'July 24, 2024',
      title: 'Emotional Intelligence in Education Building',
      image: '/src/assets/Image 12.png', // Replace with actual image path
      comments: 25
    },
    {
      id: 2,
      date: 'July 24, 2024',
      title: 'Emotional Intelligence in Education Building',
      image: '/src/assets/image 12 (1).png', // Replace with actual image path
      comments: 25
    },
    {
      id: 3,
      date: 'July 24, 2024',
      title: 'Emotional Intelligence in Education Building',
      image: '/src/assets/image 12 (2).png', // Replace with actual image path
      comments: 25
    }
  ];

  function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={toggleAccordion}>
          <span>{title}</span>
          <span>{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  }

  return (
    <>
     <div className="homepage-container">
      <Navbar/>
      <Banner/>
    <ApplicationProcess/>
    <WhyUsa/>
    <CareersIndustry/>
    <PopularUniversities/>
    <USAOverview/>
    <StudentSay/>
    <CostOfEducation/>
   

      {/* Student's Speak Section */}
       
      <section className="student-speak-section">
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
</section>
       

      {/* FAQ Section */}
      <section className="faq-section">
      <h2>Study in <span>USA FAQ's</span></h2>
      <div className="faq-section-part">
       
        <div className='faq-content'>
        <Accordion title="Can you work when study in USA">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Accordion>
      <Accordion title="Can you work when study in USA" />
      <Accordion title="Can you work when study in USA" />
      <Accordion title="Can you work when study in USA" />
      <Accordion title="Can you work when study in USA" />
     
        </div>
        <div className="faq-image">
          <img src="/src/assets/image 18.png" alt="FAQ Illustration" />
        </div>
      </div>
      </section>
      {/* Blog Section */}
      <section className="blog-section">
      <h2>
        Our Latest <span className="highlight">Blog</span>
      </h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt="Blog" className="blog-image" />
            <div className="blog-details">
              <p className="blog-date">
                {/* <img src="/src/assets/vector.png" alt="Calendar" className="Calendar d-inline-block" style={{width: '10%'}} /> */}
                <i class="fa fa-calendar" aria-hidden="true"></i> {blog.date}
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-footer">
                <p><i className="fa fa-user" ></i> Back Theme</p>
                <p><i className="fa fa-comments"></i> {blog.comments} Comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="browse-button">Browse More Blog<span></span></button>
    </section>

     <Footer/>
    </div>
    </>
  )
}

export default App
