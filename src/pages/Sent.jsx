import { Link } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import { useSent } from "../contexts/SentContext";

const Sent = () => {
  const { searchQuery } = useSearch();
  const { sentEmails, deleteSentEmail } = useSent();

  const filteredEmails = sentEmails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Sent</h1>

      <div className="space-y-4">
        {filteredEmails.length === 0 ? (
          <div className="text-center text-gray-400 mt-8">
            No sent emails found.
          </div>
        ) : (
          filteredEmails.map((email) => (
            <div
              key={email.id}
              className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <Link to={`/sent/${email.id}`} className="block">
                <h2 className="text-xl font-semibold">{email.subject}</h2>
                <p className="text-gray-300">
                  {email.body.substring(0, 50)}...
                </p>
                <p className="text-sm text-gray-400">
                  {`From: ${email.sender} | ${new Date(
                    email.date
                  ).toLocaleString()}`}
                </p>{" "}
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => deleteSentEmail(email.id)}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Delete from Sent
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sent;
