import { Link } from 'react-router-dom';

const Trash = () => {
  // Mock email data
  const emails = [
    { id: 1, subject: 'Deleted Newsletter', sender: 'news@site.com', date: '2025-05-01', preview: 'Here’s this week’s news roundup.' },
    { id: 2, subject: 'Spam Offer', sender: 'spam@offer.com', date: '2025-04-30', preview: 'Congratulations! You’ve won a prize.' },
    { id: 3, subject: 'Old Invoice', sender: 'billing@vendor.com', date: '2025-04-29', preview: 'Your invoice is attached for your records.' },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Trash</h1>

      {/* Email List */}
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
