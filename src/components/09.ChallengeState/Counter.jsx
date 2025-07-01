import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
     <h1>Count : {count}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={() => setCount(count + 1)}>Instyle incre</button>
    </div>
  )
}

export default Counter