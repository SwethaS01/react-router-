
import React from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h1>Achievements & Certifications</h1>

      <div className="achievement-box">
        <h2>Achievements</h2>
        <ul>
          <li>
            Completed internships in C & Qt Development,
            Frontend Development, and Web Development.
          </li>
          <li>
            Developed CognitaNexus, a mentorship networking
            platform connecting juniors and seniors.
          </li>
          <li>
            Built DreamEstate Pro, a real estate web
            application with backend connectivity.
          </li>
        </ul>
      </div>

      <div className="achievement-box">
        <h2>Certifications</h2>
        <ul>
          <li>Programming in Java – NPTEL Elite Certificate (60%)</li>
          <li>Pearson Level 10</li>
          <li>AWS Academy Cloud Foundations</li>
          <li>MATLAB Coder Onramp</li>
          <li>HackerRank Certificate in SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
