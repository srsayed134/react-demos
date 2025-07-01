import React, { useState } from 'react' 
import { useEffect } from "react";

function UseStateEx7me() {

    // Declare useSate 

    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : ""
    })

    // Use useEffect to store in localstorage
    useEffect (() => {
        localStorage.setItem("name" , JSON.stringify(name))
    }, [name])
    

    // Declare input function {handleChange}

    const handleChange = (event) => {
        setName(event.target.value)
    } 
    
    // Clear setName menas name
    const handleClear = () => setName("")


  return (
    <div>
        <h1>Your name: {name}</h1>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClear}>Click to Clear</button>
    </div>
  )
}

export default UseStateEx7me