import React, { useState } from 'react';

const WeatherApi = () => {
    const [color, setColor] = useState('green');

    

    return (
        <>
            <div
                className='h-screen w-full p-0 m-0'
                style={{ backgroundColor: color }}
            >
                <div className='flex flex-wrap gap-5 ml-8'>
                <button 
                   onClick={()=>{
                    setColor("black")
                }}
                    className='p-2 mt-4 bg-black rounded text-white'
                >
                    Black
                </button>
                <button 
                    onClick={()=>{
                        setColor("orange")
                    }}
                    className='p-2 mt-4 bg-orange-700 rounded text-white'
                >
                    Orange
                </button>
                <button 
                   onClick={()=>{
                    setColor("yellow")
                }}
                    className='p-2 mt-4 bg-yellow-500 rounded text-white'
                >
                    Yellow
                </button>
                <button 
                    onClick={()=>{
                        setColor("gray")
                    }}
                    className='p-2 mt-4 bg-gray-700 text-white rounded'
                >
                    Gray
                </button>
                <button 
                    onClick={()=>{
                        setColor("brown")
                    }}
                    className='p-2 mt-4 bg-amber-950 text-white rounded'
                >
                Brown
                </button></div>
            </div>
        </>
    );
};

export default WeatherApi;
