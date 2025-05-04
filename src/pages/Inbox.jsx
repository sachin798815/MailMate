import { Link } from 'react-router-dom';

const Inbox = () => {
  // Mock email data
  const emails = [
    { id: 1, subject: 'Meeting Reminder', sender: 'HR@company.com', date: '2025-05-04', preview: 'Don\'t forget the meeting tomorrow at 10 AM.' },
    { id: 2, subject: 'Invoice from Vendor', sender: 'vendor@company.com', date: '2025-05-03', preview: 'Here is the invoice for the latest order.' },
    { id: 3, subject: 'Project Update', sender: 'manager@company.com', date: '2025-05-02', preview: 'The project is going well and we are on track for delivery.' },
    // Add more mock emails as needed
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Inbox</h1>

      {/* Email List */}
      <div className="space-y-4">
        {emails.map((email) => (
          <div
            key={email.id}
            className="bg-secondary-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Link to={`/inbox/${email.id}`} className="block">
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

export default Inbox;
