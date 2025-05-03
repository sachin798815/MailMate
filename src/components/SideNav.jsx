import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="bg-primary-dark text-white w-64 h-screen p-4">
      <div className="flex flex-col space-y-4 text-center">
        <Link to="/" className="text-xl font-bold hover:text-accent-light">
          Inbox
        </Link>
        <Link to="/sent" className="text-xl font-bold hover:text-accent-light">
          Sent
        </Link>
        <Link to="/trash" className="text-xl font-bold hover:text-accent-light">
          Trash
        </Link>
        <Link to="/compose" className="text-xl font-bold hover:text-accent-light">
          Compose
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
