import { useRef } from 'react';

const PracticeUserefe = () => {
  const usernameRef = useRef(null); // Ref for the username input
  const passwordRef = useRef(null); // Ref for the password input

  // Function to focus on the username input
  const focusUsername = () => {
    usernameRef.current.focus();
  };

  // Function to focus on the password input
  const focusPassword = () => {
    passwordRef.current.focus();
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the login logic here
    alert('Form submitted!');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 space-y-4 w-[500px]">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            ref={usernameRef} // Attach the ref to the username input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef} // Attach the ref to the password input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="space-x-2">
          <button
            type="button"
            onClick={focusUsername}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Focus Username
          </button>
          <button
            type="button"
            onClick={focusPassword}
            className="px-4 py-2 text-white bg-green-500 rounded-lg"
          >
            Focus Password
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-slate-950 text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default PracticeUserefe;
