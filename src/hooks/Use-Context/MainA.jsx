import React, { createContext } from 'react'
import D from './D';
export const Parent = createContext();

const MainA = () => {

    const name = "Wasif Ali";
  return (
    <div>
      <Parent.Provider value={name}>
        <D/>
      </Parent.Provider>
    </div>
  )
}

export default MainA
