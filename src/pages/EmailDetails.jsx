import { useParams, useNavigate } from "react-router-dom";
import { useInbox } from "../contexts/InboxContext";
import { useSent } from "../contexts/SentContext";
import { useEffect } from "react";

const EmailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { inboxEmails, markAsRead: markInboxAsRead } = useInbox();
  const { sentEmails } = useSent();

  const numericId = parseInt(id, 10);

  const email =
    sentEmails.find((e) => e.id === numericId) ||
    inboxEmails.find((e) => e.id === numericId);

  useEffect(() => {
    if (email && !email.read && !email.sender) {
      markInboxAsRead(email.id);
    }
  }, [email, markInboxAsRead]);

  if (!email) {
    return <div className="text-white">Email not found</div>;
  }

  return (
    <div className="text-white">
      <button
        onClick={() => navigate(-1)}
        className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg mb-4"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{email.subject}</h1>
      <p className="text-gray-300 mb-4">{email.body}</p>
      <p className="text-sm text-gray-400">{`From: ${
        email.sender || email.recipient
      } | ${email.date}`}</p>
    </div>
  );
};

export default EmailDetails;
