import {useEffect ,useState} from 'react'

const Jswork = () => {
    const [name , setName] = useState("Wasif")
    useEffect(() =>{
        alert(name)
    }, []);
  return (
    <>
    
    my name is {name}
    </>
  )
}

export default Jswork