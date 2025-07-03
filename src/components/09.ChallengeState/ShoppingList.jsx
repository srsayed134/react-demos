import React, { useState } from 'react'

function ShoppingList() {

    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity)
        }

        setItems((preveiousItem) => [...preveiousItem, newItem])

        setName("")
        setQuantity("")
    }
 
return (
    <div>
        <h1>Shopping list</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />
            <button type='submit'>Click to add</button>
        </form>

        <ul>
            {items.map((item) => (
                <li key={item.index}>{item.name} - quantity {item.quantity}</li>
            ))}
        </ul>
    </div>
)
}

export default ShoppingList