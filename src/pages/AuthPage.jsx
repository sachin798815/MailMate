import { useState, useEffect } from 'react';
import { signUp, signIn } from '../authApi';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = isSignUp
        ? await signUp(email, password)
        : await signIn(email, password);
      const userData = {
        email: res.data.email,
        idToken: res.data.idToken,
        localId: res.data.localId,
      };
      login(userData);
      navigate('/'); // Go to inbox/dashboard
    } catch (err) {
      alert(err.response?.data?.error?.message || 'Something went wrong');
    }
  };

  return (
    <div className="text-white max-w-md mx-auto mt-20 p-6 bg-secondary-dark rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <button
        onClick={() => setIsSignUp(!isSignUp)}
        className="mt-4 text-sm text-accent hover:underline"
      >
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthPage;
