import { useState } from 'react'

function TodoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue("")
        }
    }

    const handleChange = e => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <h1>TodoItems</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder='Add a new item' 
                />
                <button type='submit'>Add todo</button>
            </form>
            <ul>{items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
        </div>
    )
}

export default TodoList