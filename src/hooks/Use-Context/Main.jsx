import React, { createContext } from 'react';
import Comp1 from './Comp1';

export const Mdn = createContext();

const Main = () => {
 const Obj ={
    name :"wasif",
    name2 :"Ali",
    name3 :"Asad"
 } 
 const {name3 ,name2, name} = Obj

  return (
    <div>
      <Mdn.Provider value={{ name, name2 }}>
        <h2>why are you late {name}</h2>
        <h6>where are you going {name3}</h6>
        <Comp1 />
      </Mdn.Provider>
    </div>
  );
};

export default Main;
