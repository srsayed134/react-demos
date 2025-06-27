import React from 'react'
const ValidPassword = () => <h1>This is valid password</h1>;
const InvalidPassword = () => <h1>This is invalid password</h1>
const Password = ({isValid}) => isValid ? <ValidPassword/> : <InvalidPassword/>

function App() {
  return (
    <div>
      <Password isValid={false}/>
    </div>
  )
}

export default App