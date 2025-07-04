import { createContext } from 'react'
import CompA from './components/Practice/PopDriling/CompA'
export const Data = createContext()
export const Data1 = createContext()

function App() {

  const name = "Sabbir"
  const age = 21

  return (
    
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
       <CompA/>
      </Data1.Provider>
    </Data.Provider>

  )
}

export default App