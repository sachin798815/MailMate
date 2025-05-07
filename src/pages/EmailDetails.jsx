import { useParams, useNavigate } from "react-router-dom";
import { useInbox } from "../contexts/InboxContext";
import { useSent } from "../contexts/SentContext";
import { useTrash } from "../contexts/TrashContext";
import { useEffect } from "react";

const EmailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { inboxEmails, markAsRead: markInboxAsRead } = useInbox();
  const { sentEmails } = useSent();
  const { trashEmails } = useTrash();

  const inboxEmail = inboxEmails.find((e) => e.id === id);
  const sentEmail = sentEmails.find((e) => e.id === id);
  const trashEmail = trashEmails.find((e) => e.id === id);

  const email = inboxEmail || sentEmail || trashEmail;

  useEffect(() => {
    if (!email) return;
    // Only mark as read if it's an inbox email
    if (inboxEmail && !email.read) {
      markInboxAsRead(email.id);
    }
  }, [email?.id, email?.read, inboxEmail, markInboxAsRead]);

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
      <p className="text-sm text-gray-400">
        {inboxEmail && `From: ${email.sender} | `}
        {sentEmail && `To: ${email.recipient} | `}
        {trashEmail && (email.sender
          ? `From: ${email.sender} | `
          : `To: ${email.recipient} | `)}
        {new Date(email.date).toLocaleString()}
      </p>
    </div>
  );
};

export default EmailDetails;
