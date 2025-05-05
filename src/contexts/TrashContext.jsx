import { createContext, useContext, useState } from 'react';

const TrashContext = createContext();

export const TrashProvider = ({ children }) => {
  const [trashEmails, setTrashEmails] = useState([]);

  const addTrashEmail = (email) => {
    setTrashEmails((prev) => [...prev, email]);
  };

  const deleteTrashEmail = (id) => {
    setTrashEmails((prev) => prev.filter((email) => email.id !== id));
  };

  return (
    <TrashContext.Provider value={{ trashEmails, addTrashEmail, deleteTrashEmail }}>
      {children}
    </TrashContext.Provider>
  );
};

export const useTrash = () => useContext(TrashContext);
