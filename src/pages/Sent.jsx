import { Link } from 'react-router-dom';

const Sent = () => {
  const emails = [
    { id: 1, subject: 'Project Update', recipient: 'team@company.com', date: '2025-05-04', preview: 'Here is the latest update on the project.' },
    { id: 2, subject: 'Invoice for Services', recipient: 'client@company.com', date: '2025-05-03', preview: 'The invoice for the recent services is attached.' },
    { id: 3, subject: 'Meeting Follow-up', recipient: 'boss@company.com', date: '2025-05-02', preview: 'Following up on the meeting we had last week.' },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Sent</h1>

      <div className="space-y-4">
        {emails.map((email) => (
          <div
            key={email.id}
            className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Link to={`/sent/${email.id}`} className="block">
              <h2 className="text-xl font-semibold">{email.subject}</h2>
              <p className="text-gray-300">{email.preview}</p>
              <p className="text-sm text-gray-400">{`To: ${email.recipient} | ${email.date}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sent;
