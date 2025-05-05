import { useParams, useNavigate } from 'react-router-dom';
// import { useInbox } from '../contexts/InboxContext';
import { useSent } from '../contexts/SentContext';
// import { useTrash } from '../contexts/TrashContext'; 

const EmailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { inboxEmails } = useInbox();
  const { sentEmails } = useSent();
  // const { trashEmails } = useTrash();

  const numericId = parseInt(id, 10);

  // Find email in any of the contexts
  const email = sentEmails.find((e) => e.id === numericId)
    //|| inboxEmails.find((e) => e.id === numericId) ||
    // trashEmails.find((e) => e.id === numericId);

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
      <p className="text-sm text-gray-400">{`From: ${email.sender || email.recipient} | ${email.date}`}</p>
    </div>
  );
};

export default EmailDetails;
