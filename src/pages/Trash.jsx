import { Link } from 'react-router-dom';

const Trash = () => {
  const emails = [
    { id: 1, subject: 'Old Invoice', sender: 'vendor@company.com', date: '2025-04-15', preview: 'This invoice is outdated and should be reviewed.' },
    { id: 2, subject: 'Spam Email', sender: 'unknown@company.com', date: '2025-04-10', preview: 'This email is marked as spam.' },
    { id: 3, subject: 'Project Draft', sender: 'manager@company.com', date: '2025-04-08', preview: 'This was a draft of the project proposal.' },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Trash</h1>

      <div className="space-y-4">
        {emails.map((email) => (
          <div
            key={email.id}
            className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Link to={`/trash/${email.id}`} className="block">
              <h2 className="text-xl font-semibold">{email.subject}</h2>
              <p className="text-gray-300">{email.preview}</p>
              <p className="text-sm text-gray-400">{`From: ${email.sender} | ${email.date}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trash;
