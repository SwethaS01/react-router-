
import React from 'react';
import '../styles/Skill.css';

const Skill = () => {
  return (
    <section className="skill-section">
      <h1>My Skills</h1>

      <div className="skill-box">
        <h2>Programming Languages</h2>
        <ul>
          <li>C</li>
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Web Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Database</h2>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>SQL Queries</li>
          <li>Database Design</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Design Tools</h2>
        <ul>
          <li>Figma</li>
          <li>Prototyping</li>
          <li>UI Design</li>
          <li>Design Systems</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Tools & Platforms</h2>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
