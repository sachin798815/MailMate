import { createContext, useContext, useState } from 'react';

const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  const [inboxEmails, setInboxEmails] = useState([
    {
      id: 1,
      sender: 'HR@company.com',
      subject: 'Meeting Reminder',
      body: "Don't forget the meeting tomorrow at 10 AM.",
      date: '2025-05-04',
      read: false, // NEW
    },
    {
      id: 2,
      sender: 'vendor@company.com',
      subject: 'Invoice from Vendor',
      body: 'Here is the invoice for the latest order.',
      date: '2025-05-03',
      read: false, // NEW
    },
  ]);

  const addInboxEmail = (email) => {
    setInboxEmails((prev) => [...prev, email]);
  };

  const markAsRead = (id) => {
    setInboxEmails((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, read: true } : email
      )
    );
  };

  const deleteInboxEmail = (id) => {
    setInboxEmails((prev) => prev.filter((email) => email.id !== id));
  };

  return (
    <InboxContext.Provider value={{ inboxEmails, addInboxEmail, markAsRead, deleteInboxEmail }}>
      {children}
    </InboxContext.Provider>
  );
};

export const useInbox = () => useContext(InboxContext);
