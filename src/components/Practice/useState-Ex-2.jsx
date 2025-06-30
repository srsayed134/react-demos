import React from 'react'
import { useState } from "react";

function App() {

  const [movie, setMovie] = useState({
    title: "PK",
    imdbRating: 8.5
  })
  
  /* 
  const handleClick = () => {
    const copyMovie = {
      ...movie,
      imdbRating: 9
    }
    setMovie(copyMovie);
  } */
   
    const handleClick = () => {
         setMovie({...movie, imdbRating: 9})
    }

  return (
    <div>
    <h1>{movie.title}</h1>
    <h2>{movie.imdbRating}</h2>
    <button onClick={handleClick}>Click on me</button>
    </div>
  )
}

export default App
