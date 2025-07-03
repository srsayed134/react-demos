import React, { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    document.title = `Increment ${value}`
  }, [value]) //value is most important because each time setValue clicked the useEffect is render by [value] ,, if [] empthy is there useEffect render only one
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  )
}

export default App