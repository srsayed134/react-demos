import { useRef } from "react";

import React from 'react'

function App() {

  const element = useRef(null);
  const focusInput = () => {
     element.current.focus();
     element.current.value = "Sce "
  }

  return (
    <div>
      <input type="text" ref={element} />
      <button onClick={() => focusInput()}>Focus and Write</button>
    </div>
  )
}

export default App