import React from 'react'
const Cart = () => {
  const Items = ["Apple", "Benana", "Orange", "Guava", "Mango"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {Items.length > 0
        ? <h1>You have {Items.length} {Items.length === 1 ? "product" : "products"}</h1> : <h1>You have no product</h1>
      }

      <ol>
        <h1>My products</h1>
        {Items.map(item => (<li key={Math.random()}>{item}</li>))}

      </ol>
    </div>

  )
}


function App() {
  return (
    <Cart />
  )
}

export default App