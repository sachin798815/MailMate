import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useTrash } from '../contexts/TrashContext';

const Trash = () => {
  const { searchQuery } = useSearch();
  const { trashEmails, deleteTrashEmail } = useTrash();

  // Filter emails based on search query
  const filteredEmails = trashEmails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Trash</h1>

      <div className="space-y-4">
        {filteredEmails.length === 0 ? (
          <div className="text-center text-gray-400 mt-8">
            No emails found in trash.
          </div>
        ) : (
          filteredEmails.map((email) => (
            <div
              key={email.id}
              className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Link to={`/trash/${email.id}`} className="block">
                <h2 className="text-xl font-semibold">{email.subject}</h2>
                <p className="text-gray-300">{email.body.slice(0, 50)}...</p>
                <p className="text-sm text-gray-400">{`From: ${email.sender} | ${email.date}`}</p>
              </Link>

              {/* Delete Permanently Button */}
              <button
                onClick={() => deleteTrashEmail(email.id)}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Delete Permanently
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trash;
