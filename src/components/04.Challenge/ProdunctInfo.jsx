import React from 'react'

function ProdunctInfo() {
const product = {
  name: "Laptop",
  price: 1000,
  availability: "In Stock"
}
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProdunctInfo;