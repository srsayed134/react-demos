import React, { useReducer } from 'react'

const initialState = {count: 0};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    case "reset":
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
}


function App() {

  const [state, dispathch] = useReducer(reducer, initialState)

  return (
    <div>
       <button onClick={() => dispathch({type: "increment"})}>+</button>
       <button onClick={() => dispathch({type: "decrement"})}>-</button>
       <button onClick={() => dispathch({type: "reset"})}>Reset</button>
       <h1>Count: {state.count}</h1>
    </div>
  )
}

export default App