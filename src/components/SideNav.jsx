import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="w-64 bg-primary-dark text-white min-h-screen">
      <div className="p-4">
        <Link to="/" className="block p-2 hover:bg-accent">Home</Link>
        <Link to="/inbox" className="block p-2 hover:bg-accent">Inbox</Link>
        {/* Add more links here */}
      </div>
    </div>
  );
};

export default SideNav;
