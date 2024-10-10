import { useState } from 'react';

const DarkModeForm = () => {
  const [color, setColor] = useState('dark'); // Initial state set to 'dark'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changer = () => {
    setColor(color === 'dark' ? 'light' : 'dark'); // Toggle between 'dark' and 'light'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the login logic here
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className={`w-full h-screen ${color === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex items-center justify-center`}>
      <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-opacity-75 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-center">Login</h2>
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${color === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${color === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Login
        </button>
        <button
          type="button"
          onClick={changer}
          className="mt-2 w-full px-4 py-2 bg-blue-700 text-white rounded-lg"
        >
          Change Color
        </button>
      </form>
    </div>
  );
};

export default DarkModeForm;
