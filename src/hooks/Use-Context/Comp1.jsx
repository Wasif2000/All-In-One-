import {useContext} from 'react'
import {Mdn} from './Main'


const Comp1 = () => {
    const name = useContext(Mdn)
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default Comp1
