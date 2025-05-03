import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
// import HomePage from './pages/HomePage';
// import InboxPage from './pages/InboxPage';

const App = () => {
  return (
    <BrowserRouter> {/* Wrap everything in BrowserRouter */}
      <div className="flex">
        {/* SideNav */}
        <SideNav />

        <div className="flex-1">
          {/* TopNav */}
          <TopNav />

          {/* Routes */}
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/inbox" element={<InboxPage />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
