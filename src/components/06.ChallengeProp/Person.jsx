import React from 'react'

function Person(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
    </div>
  )
}


export default Person