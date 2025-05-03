import React from 'react';

const Home = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to MailMate</h1>
      <p className="mb-8 text-gray-300">Your personal email dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stat Cards */}
        <div className="bg-secondary-dark p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Unread Emails</h2>
          <p className="text-4xl font-bold">0</p>
        </div>

        <div className="bg-secondary-dark p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Total Emails</h2>
          <p className="text-4xl font-bold">0</p>
        </div>

        <div className="bg-secondary-dark p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Sent Emails</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
