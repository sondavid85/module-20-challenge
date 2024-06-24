import React from 'react';
import Project from '../components/Project';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';
import project6 from '../assets/images/project6.jpg';

function Portfolio() {
  const projects = [
    { title: 'Daily Scheduler', image: project1, deployedLink: 'http://sondavid85.github.io/module-5-challenge', repoLink: 'https://github.com/sondavid85/module-5-challenge/' },
    { title: 'Weather Dashboard', image: project2, deployedLink: 'http://sondavid85.github.io/module-6-challenge', repoLink: 'https://github.com/sondavid85/module-6-challenge/' },
    { title: 'Note Taker', image: project3, deployedLink: 'https://sondavid85-note-taker-bc5770009a75.herokuapp.com/', repoLink: 'https://github.com/sondavid85/module-11-note-taker' },
    { title: 'Tech Blog', image: project4, deployedLink: 'https://sondavid85-tech-blog-d178b2cf247e.herokuapp.com/', repoLink: 'https://github.com/sondavid85/module-14-challenge' },
    { title: 'Timed Coding Quiz', image: project5, deployedLink: 'https://sondavid85.github.io/module-4-challenge/', repoLink: 'https://github.com/sondavid85/module-4-challenge' },
    { title: 'Readme Generator', image: project6, deployedLink: '', repoLink: 'https://github.com/sondavid85/module-9-challenge', videoLink: 'https://drive.google.com/file/d/1PgoTxeTNZXvUuZbrUBBq67WaxCQUmYMP/view' },
  ];

  return (
    <section>
      <h2 style={{textAlign: "center"}}>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
