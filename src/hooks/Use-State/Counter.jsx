import { useState } from 'react';

const Counter = () => {
  const [count, setCounter] = useState(0);

  const Incre = () => {
    setCounter(count + 1);
  };

  const Decre = () => {
    setCounter(count - 1);
  };

  const Res = () => {
    setCounter(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <h1 className="text-3xl font-bold text-center">{count}</h1>
        <div className="flex space-x-4">
          <button
            onClick={Incre}
            className="px-4 py-2 text-white bg-green-500 rounded-lg transition duration-300 hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={Decre}
            className="px-4 py-2 text-white bg-red-500 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={Res}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
