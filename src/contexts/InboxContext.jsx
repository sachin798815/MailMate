import { createContext, useContext, useState } from 'react';

const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  const [inboxEmails, setInboxEmails] = useState([
    // Optionally preload some emails or keep it empty
    {
      id: 1,
      sender: 'HR@company.com',
      subject: 'Meeting Reminder',
      body: "Don't forget the meeting tomorrow at 10 AM.",
      date: '2025-05-04',
    },
    {
      id: 2,
      sender: 'vendor@company.com',
      subject: 'Invoice from Vendor',
      body: 'Here is the invoice for the latest order.',
      date: '2025-05-03',
    },
  ]);

  const addInboxEmail = (email) => {
    setInboxEmails((prev) => [...prev, email]);
  };

  return (
    <InboxContext.Provider value={{ inboxEmails, addInboxEmail }}>
      {children}
    </InboxContext.Provider>
  );
};

export const useInbox = () => useContext(InboxContext);
