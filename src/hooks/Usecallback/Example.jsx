import React, { useCallback, useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  // useCallback memoizes the function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so the function will never be recreated

  return (
    <>
      <h1 className='square'>Count: {count}</h1>
      <button className='border border-pink-700 p-1 rounded-lg' onClick={increment}>Increment</button>
        
    
    </>
  );
}

export default Example;
