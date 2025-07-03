import React, { useEffect, useState } from 'react'

function StateHookerpraca2() {

    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    })

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])

    const handleChange = e =>{
        setName(e.target.value);
    }
    const handleClear = () => setName("");

  return (
    <div>
        <h1>Your input: {name} </h1>
            <input type="text" value={name} onChange={handleChange}/>
            <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default StateHookerpraca2