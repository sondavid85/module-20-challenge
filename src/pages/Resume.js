import React from 'react';
import resumePDF from '../assets/resume.pdf';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <p>
          <a href={resumePDF} download="David_Barsi_Resume.pdf">Download Resume</a>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
