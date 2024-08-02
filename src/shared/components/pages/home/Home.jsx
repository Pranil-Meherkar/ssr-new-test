import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My React App</h1>
        <p>Building modern web applications with React and CSS.</p>
      </header>
      <section className="home-content">
        <div className="home-card">
          <h2>Features</h2>
          <p>Discover the amazing features of our application.</p>
        </div>
        <div className="home-card">
          <h2>Get Started</h2>
          <p>Learn how to get started with our app.</p>
        </div>
        <div className="home-card">
          <h2>Contact Us</h2>
          <p>Reach out to us for any inquiries or support.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
