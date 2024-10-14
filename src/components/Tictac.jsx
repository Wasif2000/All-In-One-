import React, { useState } from 'react';

const Tictac = () => {
    const [count, setCount] = useState(null);
    
    const x = () => {
        setCount("X");
    };

    return (
        <>
            <div>
                <button 
                    onClick={x} 
                    className='square border border-black w-16 h-16 text-2xl'
                >
                    {count}
                </button>
            </div>
        </>
    );
}

export default Tictac;
