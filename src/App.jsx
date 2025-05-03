import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';

const App = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen bg-primary-dark text-white">
        {/* Top Navigation */}
        <TopNav toggleSideNav={toggleSideNav} />

        <div className="flex flex-1 overflow-hidden">
          {/* Side Navigation */}
          <div className={`${isSideNavOpen ? 'block' : 'hidden'} md:block`}>
            <SideNav toggleSideNav={toggleSideNav} />
          </div>

          {/* Main Content */}
          <MainContent />
        </div>
      </div>
    </Router>
  );
};

export default App;
