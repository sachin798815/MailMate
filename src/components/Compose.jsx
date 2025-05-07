import { useState } from "react";
import { useSent } from "../contexts/SentContext";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const { addSentEmail } = useSent();

  const handleSend = (e) => {
    e.preventDefault();
    const newEmail = {
      id: Date.now(),
      recipient: to,
      subject,
      body,
      date: new Date().toISOString(),
    };
    addSentEmail(newEmail);
    alert("Email sent successfully!");
    setTo("");
    setSubject("");
    setBody("");
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Compose Email</h1>
      <form onSubmit={handleSend} className="space-y-4">
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
        <button
          type="submit"
          className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Compose;
