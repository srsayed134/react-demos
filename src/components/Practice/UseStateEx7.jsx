// import React, { useEffect, useState } from 'react'

// function UseStateEx7() {

//   const [name, setName] = useState(() => {
//     const savedName = localStorage.getItem("name");
//     return savedName ? JSON.parse(savedName) : "";
//   });
  
//   useEffect(() => {
//     localStorage.setItem("name", JSON.stringify(name))
//   }, [name])

//   const handleChange =(event) => {
//     setName(event.target.value); /* what user type something it goes to setName */
//   }
//   const handleClear = () => setName("")
//   /* it clear the setName */

//   return (
//     <div>
//       <h1>Your Name: {name}</h1>
//       <input 
//       type="text" 
//       value={name} /* go to name */
//       onChange={handleChange} /*it invoke handleChange */ placeholder='Enter your name' /> 
//       <button onClick={handleClear} /* it envoke handleClear*/>Clear name</button>
//     </div>
//   )
// }

// export default UseStateEx7