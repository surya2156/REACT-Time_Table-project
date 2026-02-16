import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleForm = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.email === 'admin@cronova.com' && loginData.password === '1234') {
      alert('✅ Login Successful!');
      onLogin();
    } else {
      alert('❌ Invalid email or password.');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }
    alert(`✅ Account created for ${signupData.email}`);
    setSignupData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className={`login-container ${isDarkMode ? '' : 'light'}`}>
      <div className="wrapper">
        {isLoginMode ? (
          <div className="login">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <h1>Cronova</h1>
            <p>Sign in to your account</p>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#forgot">Forgot password?</a>
              </div>
              <button type="submit" className="btn">
                ➜ Sign In
              </button>
            </form>
            <div className="social-login">
              <button type="button" className="social-btn facebook">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button type="button" className="social-btn twitter">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button type="button" className="social-btn instagram">
                <i className="fa-brands fa-google"></i>
              </button>
              <button type="button" className="social-btn apple">
                <i className="fa-brands fa-apple"></i>
              </button>
            </div>
            <div className="toggle-link">
              Don't have an account? <span onClick={toggleForm}>Sign Up</span>
            </div>
          </div>
        ) : (
          <div className="signup">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <h1>Cronova</h1>
            <p>Create a new account</p>
            <form onSubmit={handleSignupSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <button type="submit" className="btn">
                ➜ Sign Up
              </button>
            </form>
            <div className="social-login">
              <button type="button" className="social-btn facebook">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button type="button" className="social-btn twitter">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button type="button" className="social-btn instagram">
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button type="button" className="social-btn apple">
                <i className="fa-brands fa-apple"></i>
              </button>
            </div>
            <div className="toggle-link">
              Already have an account? <span onClick={toggleForm}>Sign In</span>
            </div>
          </div>
        )}

        <div className="preview">
          <h2>📅 Smart Timetable Management</h2>
          <table className="timetable">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00-10:00</td>
                <td>EDU101<br/><small>Room 201</small></td>
                <td>Free</td>
                <td>EDU103<br/><small>Room 105</small></td>
                <td>EDU102<br/><small>Lab 203</small></td>
                <td>Free</td>
              </tr>
              <tr>
                <td>10:00-11:00</td>
                <td>Free</td>
                <td>EDU104<br/><small>Room 102</small></td>
                <td>EDU105<br/><small>Field</small></td>
                <td>Free</td>
                <td>EDU101<br/><small>Room 201</small></td>
              </tr>
              <tr>
                <td>11:00-12:00</td>
                <td>EDU103<br/><small>Room 105</small></td>
                <td>Free</td>
                <td>Free</td>
                <td>EDU104<br/><small>Room 102</small></td>
                <td>EDU102<br/><small>Lab 203</small></td>
              </tr>
            </tbody>
          </table>
          <div className="stats">
            <div className="card">
              <h3>85%</h3>
              <p>Faculty Efficiency</p>
            </div>
            <div className="card">
              <h3>0</h3>
              <p>Conflicts</p>
            </div>
          </div>
          <button className="schedule-btn">⚡ AI-Optimized Scheduling</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
