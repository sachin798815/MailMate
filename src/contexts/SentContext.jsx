import { createContext, useContext, useState } from 'react';

const SentContext = createContext();

export const SentProvider = ({ children }) => {
  const [sentEmails, setSentEmails] = useState([]);

  const addSentEmail = (email) => {
    setSentEmails((prevEmails) => [...prevEmails, email]);
  };

  const deleteSentEmail = (id) => {
    setSentEmails((prevEmails) => prevEmails.filter((email) => email.id !== id));
  };


  return (
    <SentContext.Provider value={{ sentEmails, addSentEmail, deleteSentEmail }}>
      {children}
    </SentContext.Provider>
  );
};

export const useSent = () => useContext(SentContext);
