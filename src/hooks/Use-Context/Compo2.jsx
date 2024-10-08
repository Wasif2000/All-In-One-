import React, { useContext } from 'react';
import { Mdn } from './Main';

const Compo2 = () => {
  const { name2 ,name} = useContext(Mdn);

  return (
    <div>
      <h2>My second name is {name2}</h2>
      <h4>where are you {name}</h4>
    </div>
  );
};

export default Compo2;
