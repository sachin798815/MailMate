import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useAuth } from '../contexts/AuthContext';

const TopNav = ({ toggleSideNav }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-primary-dark p-4 shadow-md flex items-center justify-between">
      {/* Left side: Hamburger + Logo */}
      <div className="flex items-center space-x-2">
        <button
          className="md:hidden text-white mx-2"
          onClick={toggleSideNav}
        >
          <i className="fas fa-bars"></i>
        </button>

        <Link to="/" className="text-2xl font-bold text-white">
          MailMate
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-4 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-lg border border-gray-600 text-white bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Right side: User + Logout */}
      <div className="flex items-center space-x-4">
        {user && (
          <span className="text-white text-sm font-bold hidden md:block">
            {user.email}
          </span>
        )}
        <button
          onClick={handleLogout}
          className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNav;
