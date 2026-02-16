import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className={`header ${scrollY > 30 ? 'active' : ''}`}>
        <div className="logo">Cronova</div>
        <nav className="nav-links">
          <a href="#product">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={handleLoginClick}>Log in</button>
          <button className="signup-btn" onClick={handleLoginClick}>
            <span>Sign up</span>
            <div className="icon">➜</div>
          </button>
        </div>
      </header>

      {/* Curved Background */}
      <div 
        className="curved-bg" 
        style={{
          clipPath: `ellipse(120% ${50 + (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}% at 50% 0%)`
        }}
      ></div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Free AI Flowchart Generator</h1>
        <p>Turn a simple text prompt into a flowchart. Scroll down to see the curve expand at the top.</p>
        <button className="hero-btn" onClick={handleLoginClick}>Generate a Flowchart</button>
      </section>

      {/* Main Features Section */}
      <section className="features-section">
        <div className="container">
          {/* Gradient Card */}
          <div className="card card-gradient">
            <div className="jumpstart-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"/>
              </svg>
            </div>
            <h2>Jump-start your process</h2>
            <p>Generate Timetable and summarize information with Cronova AI.</p>
            <button className="card-btn">Explore mind map AI</button>
          </div>

          {/* White Card */}
          <div className="card card-white">
            <div className="card-header">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT Logo" />
              <span>Have ChatGPT Plus?</span>
            </div>
            <h2>Check out the Cronova Timetable GPT.</h2>
            <p>Check out the Cronova Timetable GPT.</p>
            <button className="card-btn">Explore Cronova Timetable GPT</button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="platform-section">
        <h2>Intelligent Scheduling Platform</h2>
        <p>Comprehensive solution for modern educational institutions with role-based access and AI optimization</p>

        <div className="portal-cards">
          <div className="card">
            <h3>Student Portal</h3>
            <ul>
              <li>View personalized schedules</li>
              <li>Select electives & open courses</li>
              <li>Download PDF/Excel formats</li>
              <li>Real-time notifications</li>
            </ul>
          </div>

          <div className="card">
            <h3>Faculty Portal</h3>
            <ul>
              <li>View teaching assignments</li>
              <li>Manage availability slots</li>
              <li>Request schedule changes</li>
              <li>Workload analytics</li>
            </ul>
          </div>

          <div className="card">
            <h3>Admin Portal</h3>
            <ul>
              <li>AI timetable generation</li>
              <li>Course & room management</li>
              <li>Resource utilization reports</li>
              <li>Conflict resolution</li>
            </ul>
          </div>

          <div className="card">
            <h3>AI Engine</h3>
            <ul>
              <li>Conflict-free scheduling</li>
              <li>Resource optimization</li>
              <li>Preference consideration</li>
              <li>Real-time adjustments</li>
            </ul>
          </div>

          <div className="card">
            <h3>Analytics & Reports</h3>
            <ul>
              <li>Classroom utilization</li>
              <li>Faculty workload balance</li>
              <li>Elective popularity trends</li>
              <li>Performance dashboards</li>
            </ul>
          </div>

          <div className="card">
            <h3>NEP 2020 Compliance</h3>
            <ul>
              <li>Flexible curriculum support</li>
              <li>Multidisciplinary approach</li>
              <li>Choice-based credits</li>
              <li>Holistic development</li>
            </ul>
          </div>
        </div>

        <h2 style={{ marginTop: '80px' }}>Why Use Our Flowchart Generator?</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="icon">⚡</div>
            <h3>AI-Powered</h3>
            <p>Generate flowcharts instantly from simple text prompts without manual effort.</p>
          </div>
          <div className="card">
            <div className="icon">🎨</div>
            <h3>Customizable</h3>
            <p>Edit shapes, colors, and layouts to match your style and requirements.</p>
          </div>
          <div className="card">
            <div className="icon">📂</div>
            <h3>Export & Share</h3>
            <p>Download your flowcharts as PNG/PDF or share them with your team easily.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>TOOLS</h4>
            <a href="#boards">Boards</a>
            <a href="#docs">Docs</a>
            <a href="#posts">Posts</a>
            <a href="#projects">Projects</a>
            <a href="#cronova-ai">Cronova AI</a>
          </div>
          <div className="footer-column">
            <h4>RESOURCES</h4>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
            <a href="#compare">Compare</a>
            <a href="#customers">Customers</a>
            <a href="#updates">Product updates</a>
            <a href="#slack">Slack integration</a>
            <a href="#templates">Templates</a>
          </div>
          <div className="footer-column">
            <h4>FEATURES</h4>
            <a href="#timetables">Generate Timetables</a>
            <a href="#scheduling">Custom Scheduling</a>
            <a href="#ai-opt">AI Optimization</a>
            <a href="#export">Export Options</a>
            <a href="#notifications">Notifications & Alerts</a>
            <a href="#integration">Integration with Calendars</a>
          </div>
          <div className="footer-column">
            <h4>GET CRONOVA</h4>
            <a href="#sales">Contact sales</a>
            <a href="#download">Download</a>
            <a href="#login" onClick={handleLoginClick}>Log in</a>
            <a href="#pricing">Pricing</a>
            <a href="#signup" onClick={handleLoginClick}>Sign up</a>
          </div>
          <div className="footer-column">
            <h4>SUPPORT</h4>
            <a href="#support">Contact support</a>
            <a href="#help">Help center</a>
            <a href="#status">Status</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="compare-links">
            <strong>COMPARE:</strong>
            <a href="#asana">Asana</a>
            <a href="#basecamp">Basecamp</a>
            <a href="#clickup">ClickUp</a>
            <a href="#coda">Coda</a>
            <a href="#confluence">Confluence</a>
            <a href="#figjam">FigJam</a>
            <a href="#jira">Jira</a>
            <a href="#linear">Linear</a>
            <a href="#lucidchart">Lucidchart</a>
            <a href="#lucidspark">Lucidspark</a>
            <a href="#miro">Miro</a>
            <a href="#monday">Monday</a>
            <a href="#mural">Mural</a>
            <a href="#notion">Notion</a>
            <a href="#shortcut">Shortcut</a>
            <a href="#trello">Trello</a>
          </div>
          <div className="social-icons">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">X</a>
            <a href="#youtube">YouTube</a>
            <a href="#butterfly">Butterfly</a>
            <a href="#github">GitHub</a>
          </div>
          <div className="legal">
            &copy; {new Date().getFullYear()} Compliance | Privacy | Security | Terms
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
