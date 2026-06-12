import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const stats = [
  { label: 'Students', value: '1,240', note: 'Across 8 departments', tone: 'blue' },
  { label: 'Faculty', value: '46', note: '38 available today', tone: 'green' },
  { label: 'Subjects', value: '72', note: '14 labs included', tone: 'amber' },
  { label: 'Rooms', value: '24', note: '82% utilization', tone: 'violet' },
];

const students = [
  { id: 'STU-101', name: 'Aarav Sharma', branch: 'CSE', semester: '5th', section: 'A', elective: 'Cloud Computing' },
  { id: 'STU-102', name: 'Meera Iyer', branch: 'IT', semester: '5th', section: 'B', elective: 'AI Systems' },
  { id: 'STU-103', name: 'Kabir Khan', branch: 'ECE', semester: '3rd', section: 'A', elective: 'IoT Design' },
  { id: 'STU-104', name: 'Ananya Rao', branch: 'CSE', semester: '7th', section: 'C', elective: 'Data Mining' },
];

const faculty = [
  { name: 'Dr. Neha Verma', subject: 'Database Systems', load: '18 hrs', availability: 'Mon, Tue, Thu', status: 'Available' },
  { name: 'Prof. Arjun Mehta', subject: 'Operating Systems', load: '16 hrs', availability: 'Tue, Wed, Fri', status: 'Busy' },
  { name: 'Dr. Pooja Nair', subject: 'AI Lab', load: '14 hrs', availability: 'Mon, Wed, Fri', status: 'Available' },
  { name: 'Prof. Rohan Das', subject: 'Computer Networks', load: '20 hrs', availability: 'Mon to Thu', status: 'Review' },
];

const courses = [
  { code: 'CS501', title: 'Database Management Systems', type: 'Core', credits: 4, faculty: 'Dr. Neha Verma' },
  { code: 'CS502', title: 'Operating Systems', type: 'Core', credits: 4, faculty: 'Prof. Arjun Mehta' },
  { code: 'CS561', title: 'Artificial Intelligence Lab', type: 'Lab', credits: 2, faculty: 'Dr. Pooja Nair' },
  { code: 'CS591', title: 'Cloud Computing', type: 'Elective', credits: 3, faculty: 'Prof. Rohan Das' },
];

const rooms = [
  { room: 'B-201', type: 'Lecture Hall', capacity: 72, block: 'Academic Block B', availability: 'Open' },
  { room: 'L-103', type: 'Computer Lab', capacity: 36, block: 'Lab Complex', availability: 'Booked' },
  { room: 'A-114', type: 'Seminar Room', capacity: 55, block: 'Academic Block A', availability: 'Open' },
  { room: 'C-302', type: 'Lecture Hall', capacity: 68, block: 'Academic Block C', availability: 'Maintenance' },
];

const timetableRows = [
  { time: '08:30 - 09:30', mon: 'DBMS | B-201', tue: 'AI Lab | L-103', wed: 'Free', thu: 'Networks | C-302', fri: 'Maths | A-114' },
  { time: '09:30 - 10:30', mon: 'OS | A-114', tue: 'DBMS | B-201', wed: 'Soft Skills', thu: 'AI Lab | L-103', fri: 'Free' },
  { time: '10:45 - 11:45', mon: 'Free', tue: 'Networks | C-302', wed: 'OS | A-114', thu: 'Seminar', fri: 'DBMS | B-201' },
  { time: '11:45 - 12:45', mon: 'AI Lab | L-103', tue: 'Project', wed: 'Maths | A-114', thu: 'Free', fri: 'Networks | C-302' },
  { time: '02:00 - 03:00', mon: 'Cloud | B-201', tue: 'Free', wed: 'Mentoring', thu: 'DBMS | B-201', fri: 'Project' },
];

const reports = [
  { title: 'Scheduling Conflicts', value: '0', change: 'All clear after last generation' },
  { title: 'Average Faculty Load', value: '17 hrs', change: 'Balanced across core departments' },
  { title: 'Room Utilization', value: '82%', change: 'Lab slots need review on Friday' },
  { title: 'Published Timetables', value: '18', change: '12 class schedules, 6 faculty schedules' },
];

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'students', label: 'Students' },
  { id: 'courses', label: 'Courses' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'masterTimetable', label: 'Master Timetable' },
  { id: 'studentTimetable', label: 'Student Timetable' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
];

const SectionHeader = ({ eyebrow, title, text, action }) => (
  <div className="section-header">
    <div>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
    {action && <button className="primary-action">{action}</button>}
  </div>
);

const DataTable = ({ columns, rows }) => (
  <div className="table-card">
    <table>
      <thead>
        <tr>
          {columns.map((column) => <th key={column.key}>{column.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.id || row.name || row.room || row.code || rowIndex}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TimetableGrid = ({ compact = false }) => (
  <div className={`timetable-card ${compact ? 'timetable-card--compact' : ''}`}>
    <div className="timetable-row timetable-row--head">
      <span>Time</span>
      <span>Monday</span>
      <span>Tuesday</span>
      <span>Wednesday</span>
      <span>Thursday</span>
      <span>Friday</span>
    </div>
    {timetableRows.map((row) => (
      <div className="timetable-row" key={row.time}>
        <span className="time-slot">{row.time}</span>
        <span>{row.mon}</span>
        <span>{row.tue}</span>
        <span>{row.wed}</span>
        <span>{row.thu}</span>
        <span>{row.fri}</span>
      </div>
    ))}
  </div>
);

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState({ data: true, timetable: true, reports: true });
  const navigate = useNavigate();

  const activeLabel = useMemo(
    () => navItems.find((item) => item.id === activeSection)?.label || 'Dashboard',
    [activeSection]
  );

  const openSection = (section) => {
    setActiveSection(section);
  };

  const toggleMenu = (menuName) => {
    setExpandedMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const renderDashboard = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Overview"
        title="Cronova Dashboard"
        text="Monitor scheduling health, resource usage, and recent academic timetable updates."
        action="Generate Timetable"
      />

      <div className="stats-grid">
        {stats.map((stat) => (
          <article className={`stat-card stat-card--${stat.tone}`} key={stat.label}>
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
            <span>{stat.note}</span>
          </article>
        ))}
      </div>

      <div className="dashboard-grid">
        <article className="panel-card">
          <div className="panel-heading">
            <h3>Today&apos;s Scheduling Queue</h3>
            <span>5 items</span>
          </div>
          <ul className="activity-list">
            <li><b>Faculty availability</b><span>Dr. Verma updated Thursday slots.</span></li>
            <li><b>Room conflict check</b><span>L-103 is booked for AI Lab and workshop.</span></li>
            <li><b>Student elective sync</b><span>Cloud Computing enrollment closed.</span></li>
            <li><b>Publish review</b><span>CSE semester 5 timetable ready.</span></li>
          </ul>
        </article>

        <article className="panel-card">
          <div className="panel-heading">
            <h3>Optimization Score</h3>
            <span>Live</span>
          </div>
          <div className="score-wrap">
            <div className="score-ring">94%</div>
            <div>
              <p>Conflict-free schedules are ready for the current dataset.</p>
              <div className="mini-metrics">
                <span>Faculty load balanced</span>
                <span>Room usage optimized</span>
                <span>Student batches mapped</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <SectionHeader
        eyebrow="Preview"
        title="Master Timetable Snapshot"
        text="A quick look at generated slots for the active academic week."
      />
      <TimetableGrid compact />
    </div>
  );

  const renderStudents = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Student Management"
        title="Students"
        text="Manage student batches, semesters, sections, and elective selections."
        action="Add Student"
      />
      <div className="summary-strip">
        <span><b>8</b> Departments</span>
        <span><b>32</b> Active Sections</span>
        <span><b>14</b> Electives</span>
      </div>
      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'branch', label: 'Branch' },
          { key: 'semester', label: 'Semester' },
          { key: 'section', label: 'Section' },
          { key: 'elective', label: 'Elective' },
        ]}
        rows={students}
      />
    </div>
  );

  const renderCourses = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Academic Data"
        title="Courses and Subjects"
        text="Organize subject codes, course types, credits, and assigned faculty."
        action="Add Course"
      />
      <DataTable
        columns={[
          { key: 'code', label: 'Code' },
          { key: 'title', label: 'Subject' },
          { key: 'type', label: 'Type' },
          { key: 'credits', label: 'Credits' },
          { key: 'faculty', label: 'Faculty' },
        ]}
        rows={courses}
      />
    </div>
  );

  const renderFaculty = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Faculty Allocation"
        title="Faculty"
        text="Track teaching load, subject ownership, availability, and allocation status."
        action="Add Faculty"
      />
      <DataTable
        columns={[
          { key: 'name', label: 'Faculty' },
          { key: 'subject', label: 'Primary Subject' },
          { key: 'load', label: 'Weekly Load' },
          { key: 'availability', label: 'Availability' },
          { key: 'status', label: 'Status' },
        ]}
        rows={faculty}
      />
    </div>
  );

  const renderRooms = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Classroom Data"
        title="Rooms"
        text="Manage room capacity, type, block, and real-time availability."
        action="Add Room"
      />
      <DataTable
        columns={[
          { key: 'room', label: 'Room' },
          { key: 'type', label: 'Type' },
          { key: 'capacity', label: 'Capacity' },
          { key: 'block', label: 'Block' },
          { key: 'availability', label: 'Availability' },
        ]}
        rows={rooms}
      />
    </div>
  );

  const renderMasterTimetable = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Timetable Generation"
        title="Master Timetable"
        text="Review the institution-wide schedule with rooms, subjects, and faculty assignments."
        action="Export PDF"
      />
      <div className="control-panel">
        <label>
          Department
          <select defaultValue="cse">
            <option value="cse">Computer Science</option>
            <option value="it">Information Technology</option>
            <option value="ece">Electronics</option>
          </select>
        </label>
        <label>
          Semester
          <select defaultValue="5">
            <option value="3">Semester 3</option>
            <option value="5">Semester 5</option>
            <option value="7">Semester 7</option>
          </select>
        </label>
        <label>
          Section
          <select defaultValue="a">
            <option value="a">Section A</option>
            <option value="b">Section B</option>
            <option value="c">Section C</option>
          </select>
        </label>
      </div>
      <TimetableGrid />
    </div>
  );

  const renderStudentTimetable = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Student Portal"
        title="Student Timetable"
        text="A student-friendly class schedule with subject, room, and free-slot visibility."
        action="Download"
      />
      <div className="student-profile-card">
        <div>
          <span>Student</span>
          <h3>Aarav Sharma</h3>
          <p>CSE | Semester 5 | Section A</p>
        </div>
        <div>
          <span>Next Class</span>
          <h3>Database Systems</h3>
          <p>09:30 AM in B-201</p>
        </div>
        <div>
          <span>Free Slots</span>
          <h3>3</h3>
          <p>This week</p>
        </div>
      </div>
      <TimetableGrid />
    </div>
  );

  const renderReports = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Reports"
        title="Analytics and Reports"
        text="Understand timetable quality, faculty workload, classroom use, and publication readiness."
        action="Export Report"
      />
      <div className="report-grid">
        {reports.map((report) => (
          <article className="report-card" key={report.title}>
            <span>{report.title}</span>
            <strong>{report.value}</strong>
            <p>{report.change}</p>
          </article>
        ))}
      </div>
      <div className="chart-card">
        <h3>Faculty Workload Distribution</h3>
        <div className="bar-chart">
          {faculty.map((item, index) => (
            <div className="bar-row" key={item.name}>
              <span>{item.name.replace('Dr. ', '').replace('Prof. ', '')}</span>
              <div><i style={{ width: `${62 + index * 9}%` }}></i></div>
              <b>{item.load}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="content-section">
      <SectionHeader
        eyebrow="Configuration"
        title="Settings"
        text="Frontend controls for academic session, access roles, notifications, and deployment preferences."
        action="Save Changes"
      />
      <div className="settings-grid">
        <article className="settings-card">
          <h3>Academic Session</h3>
          <label>Session Name<input defaultValue="2025-26 Odd Semester" /></label>
          <label>Working Days<input defaultValue="Monday to Friday" /></label>
          <label>Default Slot Duration<input defaultValue="60 minutes" /></label>
        </article>
        <article className="settings-card">
          <h3>Access Control</h3>
          <label><input type="checkbox" defaultChecked /> Administrator approvals required</label>
          <label><input type="checkbox" defaultChecked /> Faculty can update availability</label>
          <label><input type="checkbox" defaultChecked /> Students can view published schedules</label>
        </article>
        <article className="settings-card">
          <h3>Deployment</h3>
          <label>Environment<input defaultValue="AWS Docker Container" /></label>
          <label>API Mode<input defaultValue="REST API Ready" /></label>
          <label>Database<input defaultValue="MongoDB Schema Ready" /></label>
        </article>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'students':
        return renderStudents();
      case 'courses':
        return renderCourses();
      case 'faculty':
        return renderFaculty();
      case 'rooms':
        return renderRooms();
      case 'masterTimetable':
        return renderMasterTimetable();
      case 'studentTimetable':
        return renderStudentTimetable();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      case 'dashboard':
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-left">
          <button className="logo-button" onClick={() => openSection('dashboard')}>Cronova</button>
          <div className="nav-links">
            <button onClick={() => openSection('dashboard')}>Dashboard</button>
            <button onClick={() => openSection('students')}>Students</button>
            <button onClick={() => openSection('masterTimetable')}>Timetable</button>
            <button onClick={() => openSection('reports')}>Reports</button>
          </div>
        </div>
        <div className="navbar-right">
          <span className="user-info">Admin User</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-wrapper">
        <aside className="sidebar">
          <div className="sidebar-title">
            <span>Workspace</span>
            <strong>{activeLabel}</strong>
          </div>

          <nav className="sidebar-nav" aria-label="Dashboard navigation">
            <button
              className={`nav-link ${activeSection === 'dashboard' ? 'nav-link--active' : ''}`}
              onClick={() => openSection('dashboard')}
            >
              <span>▦</span> Dashboard
            </button>

            <div className="nav-section">
              <button className="nav-toggle" onClick={() => toggleMenu('data')}>
                <span>▤</span> Data Management <b>{expandedMenus.data ? '−' : '+'}</b>
              </button>
              {expandedMenus.data && (
                <div className="submenu">
                  <button onClick={() => openSection('students')} className={activeSection === 'students' ? 'active' : ''}>Students</button>
                  <button onClick={() => openSection('courses')} className={activeSection === 'courses' ? 'active' : ''}>Courses</button>
                  <button onClick={() => openSection('faculty')} className={activeSection === 'faculty' ? 'active' : ''}>Faculty</button>
                  <button onClick={() => openSection('rooms')} className={activeSection === 'rooms' ? 'active' : ''}>Rooms</button>
                </div>
              )}
            </div>

            <div className="nav-section">
              <button className="nav-toggle" onClick={() => toggleMenu('timetable')}>
                <span>▥</span> Timetable <b>{expandedMenus.timetable ? '−' : '+'}</b>
              </button>
              {expandedMenus.timetable && (
                <div className="submenu">
                  <button onClick={() => openSection('masterTimetable')} className={activeSection === 'masterTimetable' ? 'active' : ''}>Master Timetable</button>
                  <button onClick={() => openSection('studentTimetable')} className={activeSection === 'studentTimetable' ? 'active' : ''}>Student Timetable</button>
                </div>
              )}
            </div>

            <div className="nav-section">
              <button className="nav-toggle" onClick={() => toggleMenu('reports')}>
                <span>▧</span> Reports <b>{expandedMenus.reports ? '−' : '+'}</b>
              </button>
              {expandedMenus.reports && (
                <div className="submenu">
                  <button onClick={() => openSection('reports')} className={activeSection === 'reports' ? 'active' : ''}>Analytics</button>
                  <button onClick={() => openSection('settings')} className={activeSection === 'settings' ? 'active' : ''}>Settings</button>
                </div>
              )}
            </div>
          </nav>
        </aside>

        <main className="main-content">{renderContent()}</main>
      </div>

      <footer className="dashboard-footer">
        <p>© 2026 Cronova Timetable Management System</p>
      </footer>
    </div>
  );
};

export default Dashboard;
