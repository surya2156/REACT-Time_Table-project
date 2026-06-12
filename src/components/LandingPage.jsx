import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const timetable = [
  ['08:30', 'DBMS', 'AI Lab', 'Free', 'Networks', 'Maths'],
  ['09:30', 'OS', 'DBMS', 'Soft Skills', 'AI Lab', 'Free'],
  ['10:30', 'Free', 'Networks', 'OS', 'Seminar', 'DBMS'],
  ['11:30', 'AI Lab', 'Project', 'Maths', 'Free', 'Networks'],
];

const roles = [
  {
    title: 'Administrator',
    text: 'Generate timetables, assign faculty, manage rooms, and resolve conflicts from one command center.',
    points: ['Bulk data setup', 'Conflict checks', 'Export ready schedules'],
  },
  {
    title: 'Faculty',
    text: 'View teaching load, availability, classroom assignments, and updates without manual follow-ups.',
    points: ['Availability slots', 'Workload view', 'Change requests'],
  },
  {
    title: 'Student',
    text: 'Access class-wise schedules, electives, room details, and timetable updates from any device.',
    points: ['Personal timetable', 'Live updates', 'Mobile friendly'],
  },
];

const features = [
  'Automated class scheduling',
  'Faculty allocation',
  'Classroom management',
  'Role-based access control',
  'Conflict reduction',
  'Responsive React frontend',
];

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <main className="landing-page">
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Cronova home">
          <span className="brand-mark">C</span>
          <span>Cronova</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#roles">Portals</a>
          <a href="#architecture">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="header-action" onClick={goToLogin}>Open App</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">Timetable Management System</p>
          <h1>Cronova automates academic scheduling for modern institutions.</h1>
          <p className="hero-copy">
            A full-stack timetable platform designed to simplify class scheduling,
            faculty allocation, classroom planning, and conflict-free timetable generation.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={goToLogin}>Launch Dashboard</button>
            <a className="secondary-btn" href="#features">Explore Features</a>
          </div>
          <div className="hero-stats" aria-label="Project highlights">
            <div>
              <strong>3</strong>
              <span>User roles</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Target conflicts</span>
            </div>
            <div>
              <strong>AWS</strong>
              <span>Deploy ready</span>
            </div>
          </div>
        </div>

        <div className="product-preview" aria-label="Cronova timetable preview">
          <div className="preview-topbar">
            <span></span>
            <span></span>
            <span></span>
            <p>Live Schedule Builder</p>
          </div>
          <div className="preview-body">
            <aside className="preview-sidebar">
              <b>Admin</b>
              <span className="active-pill">Dashboard</span>
              <span>Faculty</span>
              <span>Rooms</span>
              <span>Reports</span>
            </aside>
            <div className="preview-panel">
              <div className="preview-summary">
                <div>
                  <span>Faculty Load</span>
                  <strong>82%</strong>
                </div>
                <div>
                  <span>Rooms Used</span>
                  <strong>18/22</strong>
                </div>
                <div>
                  <span>Conflicts</span>
                  <strong>0</strong>
                </div>
              </div>
              <div className="mini-timetable">
                <div className="table-head">Time</div>
                <div className="table-head">Mon</div>
                <div className="table-head">Tue</div>
                <div className="table-head">Wed</div>
                <div className="table-head">Thu</div>
                <div className="table-head">Fri</div>
                {timetable.map((row) => (
                  <React.Fragment key={row[0]}>
                    {row.map((cell, index) => (
                      <div className={index === 0 ? 'time-cell' : cell === 'Free' ? 'free-cell' : 'class-cell'} key={`${row[0]}-${cell}-${index}`}>
                        {cell}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-band" id="features">
        <div className="section-heading">
          <p className="eyebrow">Built for scheduling work</p>
          <h2>Everything needed to plan, publish, and maintain academic timetables.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{feature}</h3>
              <p>
                {index % 2 === 0
                  ? 'Reduce repetitive coordination and keep scheduling data organized.'
                  : 'Give teams a clear workflow backed by structured timetable data.'}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-copy">
          <p className="eyebrow">How Cronova helps</p>
          <h2>From institutional data to publishable timetables.</h2>
          <p>
            Cronova keeps faculty, subjects, classrooms, and timetable records connected,
            so administrators can plan with fewer clashes and faster approvals.
          </p>
        </div>
        <div className="workflow-steps">
          <div><strong>01</strong><span>Add departments, subjects, rooms, and faculty availability.</span></div>
          <div><strong>02</strong><span>Generate schedules while checking faculty and classroom constraints.</span></div>
          <div><strong>03</strong><span>Publish timetables for admins, faculty members, and students.</span></div>
        </div>
      </section>

      <section className="roles-section" id="roles">
        <div className="section-heading">
          <p className="eyebrow">Role-based portals</p>
          <h2>Separate experiences for every academic user.</h2>
        </div>
        <div className="role-grid">
          {roles.map((role) => (
            <article className="role-card" key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
              <ul>
                {role.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <div>
          <p className="eyebrow">Project stack</p>
          <h2>React frontend for a MERN timetable platform.</h2>
          <p>
            This frontend is designed for integration with Node.js, Express.js,
            MongoDB schemas, secure authentication, Docker containers, and AWS deployment.
          </p>
        </div>
        <div className="stack-list" aria-label="Technology stack">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Docker</span>
          <span>AWS</span>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Ready to schedule smarter</p>
          <h2>Open the Cronova frontend and explore the dashboard flow.</h2>
        </div>
        <button className="primary-btn primary-btn--dark" onClick={goToLogin}>Go to Login</button>
      </section>

      <footer className="site-footer">
        <span>Cronova</span>
        <p>Frontend-only timetable management website built with React.</p>
      </footer>
    </main>
  );
};

export default LandingPage;
