import React, { useState } from 'react'

function App() {

 const [movies, setMovies] = useState ([
    {id: 1, title: "Spider Man", imdbRating: 5 },
    {id: 2, title: "Iron Man", imdbRating: 6}
  ]);

  const handkeClick = () => {
    setMovies(movies.map(m => m.id === 1 ? {...movies, title: "Bat Man" } : m))
  }

  return (
    <div>
      {movies.map(m => (
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={handkeClick}>Change Name</button>
    </div>
  )
}

export default App