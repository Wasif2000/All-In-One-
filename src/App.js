import React from 'react';
import Tictac from './components/Tictac';

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-3'>
        <Tictac />
        <Tictac />
        <Tictac />
        <Tictac />
        <Tictac />
        <Tictac />
        <Tictac />
        <Tictac />
        <Tictac />
      </div>
    </div>
  );
}

export default App;
