import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useInbox } from '../contexts/InboxContext';

const Inbox = () => {
  const { searchQuery } = useSearch();
  const { inboxEmails } = useInbox();

  const filteredEmails = inboxEmails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Inbox</h1>
      <div className="space-y-4">
        {filteredEmails.map((email) => (
          <div
            key={email.id}
            className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Link to={`/inbox/${email.id}`} className="block">
              <div className="flex items-center justify-between">
                <h2 className={`text-xl ${!email.read ? 'font-bold' : 'font-normal'}`}>
                  {email.subject}
                </h2>
                {!email.read && <span className="w-3 h-3 rounded-full bg-blue-500"></span>}
              </div>
              <p className="text-gray-300">{email.body.substring(0, 50)}...</p>
              <p className="text-sm text-gray-400">{`From: ${email.sender} | ${email.date}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
