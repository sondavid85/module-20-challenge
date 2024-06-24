import React from 'react';
import developerImage from '../assets/images/developer.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me-content">About Me</h2>
      <div className="developer-image-container">
        <img src={developerImage} alt="Developer" className="developer-image" />
      </div>
      <p className="about-me-content">
        I am a passionate and driven web developer, recently graduated from an intensive 6-month full-stack bootcamp. During this program, I gained hands-on experience with a wide range of technologies, including HTML, CSS, JavaScript, React, MySQL, MVC architecture, Object-Oriented Programming (OOP), Node.js, Express, and Sequelize. I also have practical knowledge in deploying applications using Heroku.
      </p>      
      <p className="about-me-content">
        My training has equipped me with the skills to build and deploy dynamic, responsive web applications from scratch. I am eager to apply my knowledge and continue growing in a collaborative and innovative development team. I am particularly excited about leveraging my React and Node.js skills to contribute to impactful projects and solve real-world problems.
      </p>
      <p className="about-me-content">
        In addition to my technical skills, I bring strong problem-solving abilities, a keen eye for detail, and a dedication to continuous learning. I am confident in my ability to deliver high-quality code and collaborate effectively with team members to achieve project goals.
      </p>
    </section>
  );
}

export default AboutMe;
