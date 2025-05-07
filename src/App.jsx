import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import AuthPage from "./pages/AuthPage";
import { SearchProvider } from "./contexts/SearchContext";
import { SentProvider } from "./contexts/SentContext";
import { InboxProvider } from "./contexts/InboxContext";
import { TrashProvider } from "./contexts/TrashContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <AuthProvider> {/* ✅ moved to the outermost */}
      <SearchProvider>
        <SentProvider>
          <InboxProvider>
            <TrashProvider>
              <Router>
                <Routes>
                  {/* Auth Page Route */}
                  <Route path="/auth" element={<AuthPage />} />

                  {/* Protected Routes */}
                  <Route
                    path="/*"
                    element={
                      <ProtectedRoute>
                        <div className="flex flex-col h-screen bg-primary-dark text-white">
                          {/* Top Navigation */}
                          <TopNav toggleSideNav={toggleSideNav} />

                          <div className="flex flex-1 overflow-hidden">
                            {/* Side Navigation */}
                            <div
                              className={`${
                                isSideNavOpen ? "block" : "hidden"
                              } md:block`}
                            >
                              <SideNav
                                isOpen={isSideNavOpen}
                                toggleSideNav={toggleSideNav}
                              />
                            </div>

                            {/* Main Content */}
                            <MainContent />
                          </div>
                        </div>
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Router>
            </TrashProvider>
          </InboxProvider>
        </SentProvider>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
