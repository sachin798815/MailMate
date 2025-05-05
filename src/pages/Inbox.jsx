import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useInbox } from '../contexts/InboxContext';

const Inbox = () => {
  const { searchQuery } = useSearch();
  const { inboxEmails, deleteInboxEmail } = useInbox();

  // Filter emails
  const filteredEmails = inboxEmails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Inbox</h1>

      {filteredEmails.length === 0 ? (
        <p className="text-gray-400">No emails found.</p>
      ) : (
        <div className="space-y-4">
          {filteredEmails.map((email) => (
            <div
              key={email.id}
              className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Link to={`/inbox/${email.id}`} className="block">
                <h2 className="text-xl font-semibold">{email.subject}</h2>
                <p className="text-gray-300">{email.body.substring(0, 50)}...</p>
                <p className="text-sm text-gray-400">
                  {`From: ${email.sender} | ${email.date}`}
                </p>
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => deleteInboxEmail(email.id)}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
