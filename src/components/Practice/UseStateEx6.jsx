import React from 'react'
import { useState } from "react";

function UseStateEx6() {

    const [count, setCount] = useState( () => {
        const initialCount = 10;
        return initialCount;
    })
    const increment = () => {
        setCount((preveiousCount) => preveiousCount + 1);
    } 
    
    const [randomNumber, setrandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setrandomNumber(newNumber);
    }

  return (
    <div>
     
     <h1>Count: {count}</h1>
     <button onClick={increment}>Increment</button>
     <h1>Random number : {randomNumber}</h1>
     <button onClick={generateRandomNumber}>Click for random number</button>

    </div>
  )
}

export default UseStateEx6