import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const SentContext = createContext();

export const SentProvider = ({ children }) => {
  const [sentEmails, setSentEmails] = useState([]);
  const { user } = useAuth();

  // Extract username before '@' once and reuse
  const username = user?.email?.split('@')[0];

  // Fetch sent emails for the logged-in user
  useEffect(() => {
    const fetchSentEmails = async () => {
      if (!user || !username) {
        setSentEmails([]); // Clear when logged out
        return;
      }

      try {
        const res = await axios.get(
          `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${username}/sent.json`
        );
        const data = res.data;

        if (data) {
          // Convert object to array with id
          const emailsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setSentEmails(emailsArray);
        } else {
          setSentEmails([]);
        }
      } catch (err) {
        console.error('Error fetching sent emails:', err);
      }
    };

    fetchSentEmails();
  }, [user, username]);

  // Add sent email
  const addSentEmail = async (email) => {
    if (!user || !username) return;

    try {
      const res = await axios.post(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${username}/sent.json`,
        email
      );
      const newEmail = { id: res.data.name, ...email }; // Firebase returns { name: id }
      setSentEmails((prev) => [...prev, newEmail]);
    } catch (err) {
      console.error('Error adding sent email:', err);
    }
  };

  // Delete sent email
  const deleteSentEmail = async (id) => {
    if (!user || !username) return;

    try {
      await axios.delete(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${username}/sent/${id}.json`
      );
      setSentEmails((prev) => prev.filter((email) => email.id !== id));
    } catch (err) {
      console.error('Error deleting sent email:', err);
    }
  };

  return (
    <SentContext.Provider value={{ sentEmails, addSentEmail, deleteSentEmail }}>
      {children}
    </SentContext.Provider>
  );
};

export const useSent = () => useContext(SentContext);
