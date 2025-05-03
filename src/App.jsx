import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
// import Home from './pages/Home';
import { useState } from 'react';

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

        <div className="flex flex-1">
          {/* Side Navigation */}
          <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />

          {/* Main Content */}
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              {/* Other Routes */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
