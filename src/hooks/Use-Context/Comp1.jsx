import React, { useContext } from 'react';
import { Mdn } from './Main';
import Compo2 from './Compo2';

const Comp1 = () => {
  const { name } = useContext(Mdn);

  return (
    <div>
      <h1>My name is {name}</h1>
      <Compo2 />
    </div>
  );
};

export default Comp1;
