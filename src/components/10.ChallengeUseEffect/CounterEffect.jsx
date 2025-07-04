import React, { useEffect, useState } from 'react'

function CounterEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Counter value ${count}`
    })
  return (
    <div>
        <h1>My Count position: ${count}</h1>
        <button onClick={() => {setCount(count + 1)}}>Click</button>
    </div>
  )
}

export default CounterEffect