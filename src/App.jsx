// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
// import Inbox from './pages/Inbox';
// import Sent from './pages/Sent';
// import Trash from './pages/Trash';
// import Compose from './pages/Compose';

const App = () => {
  return (
    <Router> {/* Wrap everything in Router here */}
      <div className="flex flex-col h-screen">
        <TopNav />
        <div className="flex flex-1">
          <SideNav />
          <div className="flex-1 p-4 overflow-y-auto">
            <Routes>
              {/* <Route path="/" element={<Inbox />} />
              <Route path="/sent" element={<Sent />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/compose" element={<Compose />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
