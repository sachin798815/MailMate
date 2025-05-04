import { Link } from 'react-router-dom';

const Sent = () => {
  // Mock sent emails data
  const emails = [
    { id: 1, subject: 'Follow-up on Meeting', recipient: 'boss@company.com', date: '2025-05-04', preview: 'Thanks for the meeting. Here are the action points.' },
    { id: 2, subject: 'Invoice Sent', recipient: 'client@business.com', date: '2025-05-03', preview: 'Please find the attached invoice for your records.' },
    { id: 3, subject: 'Project Proposal', recipient: 'partner@firm.com', date: '2025-05-02', preview: 'Sharing the project proposal for your review.' },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Sent</h1>

      {/* Sent Emails List */}
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
