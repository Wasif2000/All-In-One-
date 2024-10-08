import React, { useEffect } from 'react'

const Fetching = () => {

   useEffect(
     Apiii=()=>{

    fetch("http://api.weatherapi.com/v1/current.json?key=355a77fec62e422bba1103052242609&q=usa&aqi=no")

    .then((res)=>{res.json()})
    .then((data)=>{data})
})
  return (
    <div>
      
    </div>
  )
}

export default Fetching
