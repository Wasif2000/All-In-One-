import React, { useContext } from 'react'
import { Parent } from './MainA'

const D = () => {
    const name = useContext(Parent) 
  return (
    <div>
      <h1>my name is {name}</h1>
    </div>
  )
}

export default D
