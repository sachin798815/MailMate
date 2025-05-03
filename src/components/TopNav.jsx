import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className="bg-primary-dark p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          MailMate
        </Link>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg border border-gray-600 text-white bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Logout button */}
        <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNav;
