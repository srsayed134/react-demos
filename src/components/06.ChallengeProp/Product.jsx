import React from 'react'

function Product({name, price}) {
  return (
    <div>
    <h1>{name}</h1>
    <h1>{price}</h1>
    </div>
  )
}

export default Product