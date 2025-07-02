import React, { useState } from 'react'

function StateHookprca1() {

    //Array example
  const [friends, setFriends] = useState(["Sayed", "Mahi"]);

  //Object example
  const [movie, setMovie] = useState({
    movieName: "Pk",
    movieRatings: 7.5
  })
  //Object array example
  const [place, setPlace] = useState([
    {postCode: 35, placeName: "Likom"},
    {postCode: 36, placeName: "State"}
  ])

  //Add kalki friend
  const addOneFriend = () => setFriends([...friends, "Kalki"])

  //Remove Sayed
  const removeSayed = () => setFriends(friends.filter(f => f !== "Sayed"))

  //Change mahi name
  const updateOneFriend = () => setFriends(friends.map(f => f === "Mahi" ? "Mahi Change" : f))

  //Update object
  const updateMovieName = () => {
    setMovie({...movie, movieName: "The death"});
  }
  //Update place name [1st inter array ny map then inter object by p.postCode]
  const handleButton = () => {
    setPlace(place.map(p => p.postCode === 36 ? {...place, placeName: "tha"} : p))
  }

  return (
    <div>
        

        {friends.map((f) => (
            <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={addOneFriend}>Add new friend</button>
        <button onClick={removeSayed}
        >Remove sayed</button>
        <button onClick={updateOneFriend}>Update Mahi friend</button>


        <h1>Movie name: {movie.movieName}</h1>

        <button style={{marginBottom: "10px"}} onClick={updateMovieName} >Update Movie</button>

        {/* Example of object in array */}
        {place.map(p => 
            <li key={p.postCode}>{p.placeName}</li>
        )}
        <button onClick={handleButton}>Change Chandina name</button>
    </div>
  )
}

export default StateHookprca1