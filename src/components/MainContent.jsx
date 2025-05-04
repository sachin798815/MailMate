import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import Sent from '../pages/Sent';
import Trash from '../pages/Trash';
import EmailDetails from '../pages/EmailDetails';
import Compose from './Compose';

const MainContent = () => {
  return (
    <div className="flex-1 p-4 bg-secondary-dark overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/compose" element={<Compose />} />
        {/* Email Details Route */}
        <Route path="/inbox/:id" element={<EmailDetails />} />
        <Route path="/sent/:id" element={<EmailDetails />} />
        <Route path="/trash/:id" element={<EmailDetails />} />
      </Routes>
    </div>
  );
};

export default MainContent;
