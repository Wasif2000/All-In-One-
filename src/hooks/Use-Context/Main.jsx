import {createContext} from 'react'
import Comp1 from './Comp1'

 export const Mdn = createContext()

const Main = () => {
    const name ="Wasif";
  return (
    <div>
      <Mdn.Provider value={name}>
        <Comp1/>
      </Mdn.Provider>
    </div>
  )
}

export default Main

