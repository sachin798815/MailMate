import { createContext, useContext, useState } from 'react';

const SentContext = createContext();

export const SentProvider = ({ children }) => {
  const [sentEmails, setSentEmails] = useState([]);

  const addSentEmail = (email) => {
    setSentEmails((prevEmails) => [...prevEmails, email]);
  };

  return (
    <SentContext.Provider value={{ sentEmails, addSentEmail }}>
      {children}
    </SentContext.Provider>
  );
};

export const useSent = () => useContext(SentContext);
