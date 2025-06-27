/* 
import React from 'react'
import Card from './components/06.ChallengeProp/Card'

function App() {
  return (
    <div>
      <Card>
        <h1>Challenge Prop 1</h1>
        <p>This is a challenge to pass props to a component.</p>  
      </Card>
      <Card>
        <h1>Challenge Prop 2</h1>
        <p>This is a challenge to pass props to a component.</p>  
      </Card>
      <Card>
        <h1>Challenge Prop 3</h1>
        <p>This is a challenge to pass props to a component.</p>  
      </Card>
    </div>
  )
}

export default App */


import React from 'react'

function Card({children}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default Card