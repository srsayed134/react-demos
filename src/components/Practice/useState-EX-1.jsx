import React from 'react'

import { useState } from "react";

function App() {

    const [count, setCount] = useState(0); // in useState (0, #) "#" there have a funtion (console count without useState , you will find )
    console.log(count)
    const increment = () => setCount (count + 10);
    const decrement = () => setCount(count - 10);

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={increment}>Click for 10+ each</button>
     <br />
     <button onClick={decrement}>Click for 10- each</button>

    </div>
  )
}

export default App

/*

import React from 'react'

import { useState } from 'react'

function App() {

  const [friends, setFeiends] = useState(["Alex", "Jhon"])

  const addOneFriend = () => setFeiends([...friends, "Sayed"]);
  const removeOneFriend = () => setFeiends(friends.filter(f => f !== "Jhon"));
  const updateOneFriend = () => {
    setFeiends(friends.map(f => f === "Alex" ? "Alex smith" : f))
  }

  return (
    <div>
      {friends.map(f => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>
         Click to add one friend
      </button>
      <button onClick={removeOneFriend}>Remove one friend</button>
      <button onClick={updateOneFriend}>Update one friend</button>
    </div>
  )
}

export default App

*/