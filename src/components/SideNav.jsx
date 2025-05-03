import { Link } from 'react-router-dom';

const SideNav = ({ isOpen, toggleSideNav }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed top-0 left-0 w-64 h-full bg-primary-dark text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="text-xl">
              Inbox
            </Link>
          </li>
          <li>
            <Link to="/sent" className="text-xl">
              Sent
            </Link>
          </li>
          <li>
            <Link to="/trash" className="text-xl">
              Trash
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
