import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  const [inboxEmails, setInboxEmails] = useState([]);
  const { user } = useAuth();

  // Extract username (before @) to use as dynamic DB key
  const username = user?.email?.split("@")[0];

  // Fetch inbox emails for the logged-in user
  useEffect(() => {
    let intervalId;

    const fetchInboxEmails = async () => {
      if (!user || !username) {
        setInboxEmails([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${username}/inbox.json`
        );
        const data = res.data;

        if (data) {
          const emailsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setInboxEmails(emailsArray);
        } else {
          setInboxEmails([]);
        }
      } catch (err) {
        console.error("Error fetching inbox emails:", err);
      }
    };

    // Fetch immediately on mount
    fetchInboxEmails();

    // Set interval to fetch every 5 seconds
    intervalId = setInterval(fetchInboxEmails, 5000);

    // Cleanup on unmount or user change
    return () => {
      clearInterval(intervalId);
    };
  }, [user, username]);

  // Mark as read
  const markAsRead = async (id) => {
    const email = inboxEmails.find((e) => e.id === id);
    if (!email || !user || !username) return;

    try {
      await axios.patch(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${username}/inbox/${id}.json`,
        { read: true }
      );
      setInboxEmails((prev) =>
        prev.map((email) =>
          email.id === id ? { ...email, read: true } : email
        )
      );
    } catch (err) {
      console.error("Error marking email as read:", err);
    }
  };

  // Delete email
  const deleteInboxEmail = async (id) => {
    if (!user || !username) return;
    try {
      await axios.delete(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${username}/inbox/${id}.json`
      );
      setInboxEmails((prev) => prev.filter((email) => email.id !== id));
    } catch (err) {
      console.error("Error deleting inbox email:", err);
    }
  };

  return (
    <InboxContext.Provider
      value={{ inboxEmails, markAsRead, deleteInboxEmail }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInbox = () => useContext(InboxContext);
