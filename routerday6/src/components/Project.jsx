
import React from 'react';
import '../styles/Project.css';
const Project = () => {
  return (
    <section  className="project-section">
      <h1>My Projects</h1>

      <div className="project-card">
        <h2>CognitaNexus – Mentorship Networking Platform</h2>
        <p>
          A live networking web application designed to
          connect junior and senior students and facilitate
          mentorship and knowledge sharing.
        </p>
        <p>
          Technologies: React.js, Node.js, Express.js, MongoDB
        </p>
        <p>
          Live Demo:{' '}
          <a
            href="https://cognitanexus.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Visit CognitaNexus
          </a>
        </p>
      </div>

      <div className="project-card">
        <h2>DreamEstate Pro</h2>
        <p>
          A real estate web application featuring user
          authentication, property listings, a cart system,
          and payment integration with backend connectivity.
        </p>
        <p>
          Technologies: HTML, CSS, JavaScript, Node.js, MongoDB
        </p>
      </div>

      <div className="project-card">
        <h2>Turf Booking System</h2>
        <p>
          A responsive sports turf booking website that
          allows users to check availability, view pricing,
          and book slots easily.
        </p>
        <p>Technologies: HTML, CSS</p>
      </div>

      <div className="project-card">
        <h2>Crave – Food Delivery App</h2>
        <p>
          A modern food delivery mobile app UI designed
          with a clean layout, smooth navigation, and
          a user-friendly experience.
        </p>
        <p>Technologies: UI/UX Design</p>
      </div>
    </section>
  );
};

export default Project;
