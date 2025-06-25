import React from 'react'

function Greeting() {
    const greetings = "Hello World!";
    const date = new Date();
  return (
    <div>
        <h1>{greetings}</h1>
        <p>Date: {date.getDate()}</p>
    </div>
  )
}

export default Greeting;