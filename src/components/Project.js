import React from 'react';

function Project({ title, image, deployedLink, repoLink, videoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        { !!deployedLink ? <span><a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> | </span> : null }
        { !!videoLink ? <span><a href={videoLink} target="_blank" rel="noopener noreferrer">Demo Video</a> | </span> : null }
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
}

export default Project;
