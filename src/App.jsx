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