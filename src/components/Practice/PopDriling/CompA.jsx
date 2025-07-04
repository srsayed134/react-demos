// import React from 'react'
// import CompA from './components/Practice/PopDriling/CompA'

// function App() {

//   const nameHold = "Sayed"

//   return (
//     <div>
//     <CompA nameHold={nameHold}/>
//     </div>
//   )
// }

// export default App


import CompB from './CompB'

function CompA() {
  return (
    <div>
        <CompB />
    </div>
  )
}

export default CompA