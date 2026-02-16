import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState({});
  const navigate = useNavigate();

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">Cronova</div>
          <div className="nav-links">
            <a href="#dashboard" onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a>
            <a href="#data" onClick={(e) => { e.preventDefault(); setActiveSection('dataManagement'); }}>Data Management</a>
            <a href="#timetable" onClick={(e) => { e.preventDefault(); setActiveSection('timetable'); }}>Timetable</a>
            <a href="#settings" onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a>
          </div>
        </div>
        <div className="navbar-right">
          <span className="user-info">Admin User</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="dashboard-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <div className="nav-item">
              <a href="#dashboard" onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }} className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
                </svg>
                Dashboard
              </a>
            </div>

            <div className="nav-section">
              <button className="nav-toggle" onClick={() => toggleMenu('dataManagement')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7v10m-4-5h20m-4 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Data Management
                <svg className={`arrow ${expandedMenus.dataManagement ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedMenus.dataManagement && (
                <ul className="submenu">
                  <li><a href="#students">Students</a></li>
                  <li><a href="#courses">Courses</a></li>
                  <li><a href="#faculty">Faculty</a></li>
                  <li><a href="#rooms">Rooms</a></li>
                </ul>
              )}
            </div>

            <div className="nav-section">
              <button className="nav-toggle" onClick={() => toggleMenu('timetable')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Timetable
                <svg className={`arrow ${expandedMenus.timetable ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedMenus.timetable && (
                <ul className="submenu">
                  <li><a href="#master">Master Timetable</a></li>
                  <li><a href="#student">Student Timetable</a></li>
                </ul>
              )}
            </div>

            <div className="nav-section">
              <button className="nav-toggle" onClick={() => toggleMenu('notifications')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C6.182 6.558 4 8.715 4 11v3.159c0 .548-.22.95-.572 1.302L2 17h5v3h10v-3z" />
                </svg>
                Notifications / Reports
                <svg className={`arrow ${expandedMenus.notifications ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedMenus.notifications && (
                <ul className="submenu">
                  <li><a href="#studentReports">Students</a></li>
                  <li><a href="#facultyReports">Faculty</a></li>
                  <li><a href="#timetableReports">Student Timetable</a></li>
                </ul>
              )}
            </div>

            <div className="nav-item">
              <a href="#settings" onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }} className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.325 4.317c.426-.474 1.056-.474 1.482 0l4.317 4.317a1 1 0 010 1.482l-4.317 4.317c-.474.426-1.056.426-1.482 0l-4.317-4.317a1 1 0 010-1.482l4.317-4.317z" />
                </svg>
                Settings
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {activeSection === 'dashboard' && (
            <div className="content-section">
              <h2 className="section-title">Dashboard</h2>
              
              <div className="stats-grid">
                <div className="stat-card card-a">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.636L11.74 2.8a1.5 1.5 0 012.12 0l7.48 7.836a1.5 1.5 0 01-.06 2.12L14.26 21.2a1.5 1.5 0 01-2.12 0L4.26 12.755a1.5 1.5 0 01-.06-2.114z" />
                    </svg>
                  </div>
                  <div className="card-value">1200</div>
                  <p className="card-desc">Students</p>
                </div>

                <div className="stat-card card-b">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12a.75.75 0 110-1.5.75.75 0 010 1.5zM12 17.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                  </div>
                  <div className="card-value">35</div>
                  <p className="card-desc">Courses</p>
                </div>

                <div className="stat-card card-c">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a12.18 12.18 0 0115 0" />
                    </svg>
                  </div>
                  <div className="card-value">45</div>
                  <p className="card-desc">Faculty</p>
                </div>

                <div className="stat-card card-d">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z" />
                    </svg>
                  </div>
                  <div className="card-value">20</div>
                  <p className="card-desc">Rooms</p>
                </div>
              </div>

              <div className="content-grid">
                <div className="quick-actions-card">
                  <h3>Quick Actions</h3>
                  <div className="action-buttons">
                    <button className="btn-blue">Generate Timetable</button>
                    <button className="btn-gray">View Master Timetable</button>
                    <button className="btn-gray">View Student Timetable</button>
                  </div>
                </div>

                <div className="notifications-card">
                  <h3>Notifications / Recent Updates</h3>
                  <ul className="notifications-list">
                    <li><span>New elective added:</span> Music</li>
                    <li><span>Faculty unavailable today:</span> Dr. Smith</li>
                    <li><span>Timetable updated:</span> New lectures</li>
                  </ul>
                </div>
              </div>

              <div className="charts-section">
                <h3>Charts / Analytics</h3>
                <div className="charts-grid">
                  <div className="chart-container">
                    <h4>Student distribution across electives</h4>
                    <svg width="300" height="200" viewBox="0 0 150 150">
                      <circle cx="60" cy="60" r="45" fill="transparent" stroke="#06b6d4" strokeWidth="15" strokeDasharray="169.646 282.743" strokeDashoffset="0" transform="rotate(-90 60 60)"/>
                      <circle cx="60" cy="60" r="45" fill="transparent" stroke="#f56565" strokeWidth="15" strokeDasharray="84.823 282.743" strokeDashoffset="-169.646" transform="rotate(-90 60 60)"/>
                      <circle cx="60" cy="60" r="45" fill="transparent" stroke="#f6ad55" strokeWidth="15" strokeDasharray="28.274 282.743" strokeDashoffset="-254.469" transform="rotate(-90 60 60)"/>
                    </svg>
                  </div>
                  <div className="chart-container">
                    <h4>Faculty workload</h4>
                    <svg width="400" height="230" viewBox="0 0 400 230">
                      <g>
                        <text x="0" y="205" fontSize="12" fill="#4b5563" textAnchor="start">0%</text>
                        <line x1="30" y1="200" x2="400" y2="200" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />
                      </g>
                      <g>
                        <text x="0" y="155" fontSize="12" fill="#4b5563" textAnchor="start">25%</text>
                        <line x1="30" y1="150" x2="400" y2="150" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />
                      </g>
                      <g>
                        <text x="0" y="105" fontSize="12" fill="#4b5563" textAnchor="start">50%</text>
                        <line x1="30" y1="100" x2="400" y2="100" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />
                      </g>
                      <g>
                        <text x="0" y="55" fontSize="12" fill="#4b5563" textAnchor="start">75%</text>
                        <line x1="30" y1="50" x2="400" y2="50" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />
                      </g>
                      <g>
                        <text x="0" y="5" fontSize="12" fill="#4b5563" textAnchor="start">100%</text>
                        <line x1="30" y1="0" x2="400" y2="0" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />
                      </g>
                      <g transform="translate(50, 0)">
                        <rect x="0" y="100" width="30" height="100" fill="#3b82f6" rx="5"/>
                        <text x="15" y="220" fontSize="12" fill="#4b5563" textAnchor="middle">Teodos</text>
                      </g>
                      <g transform="translate(100, 0)">
                        <rect x="0" y="160" width="30" height="40" fill="#3b82f6" rx="5"/>
                        <text x="15" y="220" fontSize="12" fill="#4b5563" textAnchor="middle">Pocola</text>
                      </g>
                      <g transform="translate(150, 0)">
                        <rect x="0" y="20" width="30" height="180" fill="#3b82f6" rx="5"/>
                        <text x="15" y="220" fontSize="12" fill="#4b5563" textAnchor="middle">Focora</text>
                      </g>
                      <g transform="translate(200, 0)">
                        <rect x="0" y="60" width="30" height="140" fill="#3b82f6" rx="5"/>
                        <text x="15" y="220" fontSize="12" fill="#4b5563" textAnchor="middle">Rokos</text>
                      </g>
                      <g transform="translate(250, 0)">
                        <rect x="0" y="0" width="30" height="200" fill="#3b82f6" rx="5"/>
                        <text x="15" y="220" fontSize="12" fill="#4b5563" textAnchor="middle">Test860</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'dataManagement' && (
            <div className="content-section">
              <h2 className="section-title">Data Management</h2>
              <p>Data Management Page Content</p>
            </div>
          )}

          {activeSection === 'timetable' && (
            <div className="content-section">
              <h2 className="section-title">Timetable</h2>
              <p>Timetable Page Content</p>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="content-section">
              <h2 className="section-title">Settings</h2>
              <p>Settings Page Content</p>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AI Timetable Generator</p>
      </footer>
    </div>
  );
};

export default Dashboard;
