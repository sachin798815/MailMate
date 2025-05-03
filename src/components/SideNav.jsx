import { Link } from 'react-router-dom';

const SideNav = ({ isOpen, toggleSideNav }) => {
  return (
    <div
      className={`fixed inset-0 md:relative md:flex md:w-64 bg-primary-dark text-white p-4 transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      {/* Close button for mobile */}
      <button
        className="md:hidden text-white mb-4"
        onClick={toggleSideNav}
      >
        <i className="fas fa-times"></i> {/* Close Icon */}
      </button>

      {/* Side Navigation Links */}
      <div className="flex flex-col space-y-4">
        <Link to="/" className="text-lg hover:text-accent transition duration-200">
          Home
        </Link>
        <Link to="/inbox" className="text-lg hover:text-accent transition duration-200">
          Inbox
        </Link>
        <Link to="/sent" className="text-lg hover:text-accent transition duration-200">
          Sent
        </Link>
        <Link to="/trash" className="text-lg hover:text-accent transition duration-200">
          Trash
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
