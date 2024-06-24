import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div id="root">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
