import { useParams, useNavigate } from 'react-router-dom';

const EmailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock email data
  const emails = {
    1: { subject: 'Meeting Reminder', sender: 'HR@company.com', date: '2025-05-04', body: 'Don\'t forget the meeting tomorrow at 10 AM.' },
    2: { subject: 'Invoice from Vendor', sender: 'vendor@company.com', date: '2025-05-03', body: 'Here is the invoice for the latest order.' },
    3: { subject: 'Project Update', sender: 'manager@company.com', date: '2025-05-02', body: 'The project is going well and we are on track for delivery.' },
  };

  const email = emails[id];
  
  if (!email) {
    return <div>Email not found</div>;
  }

  return (
    <div className="text-white">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg mb-4"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{email.subject}</h1>
      <p className="text-gray-300 mb-4">{email.body}</p>
      <p className="text-sm text-gray-400">{`From: ${email.sender} | ${email.date}`}</p>
    </div>
  );
};

export default EmailDetails;
