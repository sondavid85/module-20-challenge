import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navigation">
      {['About Me', 'Portfolio', 'Contact', 'Resume'].map((page) => (
        <a
          href="#"
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
