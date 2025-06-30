/*

import React, { useState } from 'react'
import UseStateEx4 from './components/Practice/useStateEx4'
import UseStateEx5 from './components/Practice/useStateEx5'

function App() {

  const [count, setCount] = useState(0)

   
  return (
    <div>
     <UseStateEx4 count={count} onClickHandler={() => setCount(count + 1)}/>
     <UseStateEx5 count={count} onClickHandler={() => setCount(count + 1)}/>

    <p>Both components share the same <code>{count}</code> state, so updating the count in one will update it in the other.</p>
    </div>
  )
}

export default App

*/

import React from 'react'

function UseStateEx5({count, onClickHandler}) {
    const handleClick = () => onClickHandler()
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment1</button>
    </div>
  )
}

export default UseStateEx5