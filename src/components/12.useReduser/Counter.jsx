// import React, { useReducer } from 'react'
// import Counter from './components/12.useReduser/Counter';

// const initialState = {count: 0};
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     case "reset":
//       return {
//         ...state,
//         count: 0
//       }
//     default:
//       return state;
//   }
// }


// function App() {

//   const [state, dispathch] = useReducer(reducer, initialState)

//   return (
//     <div>
//        <button onClick={() => dispathch({type: "increment"})}>+</button>
//        <button onClick={() => dispathch({type: "decrement"})}>-</button>
//        <button onClick={() => dispathch({type: "reset"})}>Reset</button>
//        <h1>Count: {state.count}</h1>

//        <Counter/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useReducer, useState } from 'react'
import { counterReduser, initialState } from '../Practice/counterReducer'

function Counter() {

    const [state, dispatch] = useReducer(counterReduser, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleInrement = () => dispatch({type: "increment"})
    const handleDecrement = () => dispatch({type: "decrement"})

    const handleInrementByAmount = () => {
        dispatch({type: "incrementByAmount",payload: Number(inputValue)});
        setInputValue(0);
}
    const handleDecrementByAmount = () => {
        dispatch({type: "decrementByAmount",payload: +inputValue})
    }

  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={handleInrement}>Incre</button>
        <button onClick={handleDecrement}>Decre</button>

        <div>
            <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />

            <button onClick={handleInrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>
    </div>
  )
}

export default Counter