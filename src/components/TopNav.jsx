import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

const TopNav = ({ toggleSideNav }) => {
  const { searchQuery, setSearchQuery } = useSearch(); // Access search query and setter from context

  return (
    <div className="bg-primary-dark p-4 shadow-md flex items-center justify-between">
      {/* Hamburger Icon for Mobile View */}
      <button
        className="md:hidden text-white mx-2"
        onClick={toggleSideNav}
      >
        <i className="fas fa-bars"></i> {/* Hamburger Icon */}
      </button>

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-white">
        MailMate
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-4 max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-lg border border-gray-600 text-white bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query in context
        />
      </div>

      {/* Logout Button */}
      <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
        Logout
      </button>
    </div>
  );
};

export default TopNav;
