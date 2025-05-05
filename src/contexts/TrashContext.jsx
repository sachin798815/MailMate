import { createContext, useContext, useState } from 'react';

const TrashContext = createContext();

export const TrashProvider = ({ children }) => {
  const [trashEmails, setTrashEmails] = useState([]);

  const addTrashEmail = (email) => {
    setTrashEmails((prev) => [...prev, email]);
  };

  return (
    <TrashContext.Provider value={{ trashEmails, addTrashEmail }}>
      {children}
    </TrashContext.Provider>
  );
};

export const useTrash = () => useContext(TrashContext);
