import { useState } from "react";
import { useSent } from "../contexts/SentContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const { addSentEmail } = useSent();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Extract sender and recipient usernames (before @)
  // const senderId = user?.email?.split("@")[0];
  const recipientId = to ? to.split("@")[0] : null;

  // Function to handle the send action
  const handleSend = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to send emails.");
      return;
    }

    if (!recipientId) {
      alert("Invalid recipient email.");
      return;
    }

    // New email object
    const newEmail = {
      sender: user.email,
      recipient: to,
      subject,
      body,
      date: new Date().toISOString(),
      read: false,
    };

    try {
      // Add email to the sender's Sent folder
      await addSentEmail(newEmail);

      // Add email to the recipient's Inbox folder using their username (before @)
      await fetch(
        `https://mailmate-ee02b-default-rtdb.firebaseio.com/users/${recipientId}/inbox.json`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newEmail),
        }
      );

      // Successfully sent the email
      alert("Email sent successfully!");
      setTo("");
      setSubject("");
      setBody("");
      navigate("/sent"); // Redirect to the Sent page
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Compose Email</h1>
      <form onSubmit={handleSend} className="space-y-4">
        {/* Recipient's email */}
        <div>
          <label className="block text-gray-300 mb-1">To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            className="w-full p-2 rounded-lg bg-secondary-dark border border-gray-600 text-white"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-300 mb-1">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-2 rounded-lg bg-secondary-dark border border-gray-600 text-white"
          />
        </div>

        {/* Email Body */}
        <div>
          <label className="block text-gray-300 mb-1">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="w-full p-2 rounded-lg bg-secondary-dark border border-gray-600 text-white"
            rows="6"
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={!to || !subject || !body}
          className={`bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            (!to || !subject || !body) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Compose;
