import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const TrashContext = createContext();

export const TrashProvider = ({ children }) => {
  const [trashEmails, setTrashEmails] = useState([]);
  const { user } = useAuth();

  // Extract username before '@' for the Firebase path
  const userId = user?.email?.split('@')[0];

  // Fetch trash emails when user logs in
  useEffect(() => {
    const fetchTrashEmails = async () => {
      if (!userId) {
        setTrashEmails([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${userId}/trash.json`
        );
        const data = res.data;

        if (data) {
          const emailsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setTrashEmails(emailsArray);
        } else {
          setTrashEmails([]);
        }
      } catch (err) {
        console.error('Error fetching trash emails:', err);
      }
    };

    fetchTrashEmails();
  }, [userId]);

  // Add email to trash
  const addTrashEmail = async (email) => {
    if (!userId) return;

    try {
      const res = await axios.post(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${userId}/trash.json`,
        email
      );
      const newEmail = { id: res.data.name, ...email }; // Firebase returns { name: id }
      setTrashEmails((prev) => [...prev, newEmail]);
    } catch (err) {
      console.error('Error adding trash email:', err);
    }
  };

  // Delete email from trash
  const deleteTrashEmail = async (id) => {
    if (!userId) return;

    try {
      await axios.delete(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${userId}/trash/${id}.json`
      );
      setTrashEmails((prev) => prev.filter((email) => email.id !== id));
    } catch (err) {
      console.error('Error deleting trash email:', err);
    }
  };

  return (
    <TrashContext.Provider value={{ trashEmails, addTrashEmail, deleteTrashEmail }}>
      {children}
    </TrashContext.Provider>
  );
};

export const useTrash = () => useContext(TrashContext);
