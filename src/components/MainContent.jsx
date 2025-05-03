import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
// Other imports...

const MainContent = () => {
  return (
    <div className="flex-1 p-4 bg-secondary-dark overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        {/* Add other routes for Sent, Trash, etc. */}
      </Routes>
    </div>
  );
};

export default MainContent;
