import React from 'react'
function Move(){
  const moveHandler = () => {
    alert("Mouse move event")
    console.log("Mouse is moved");
    
  }
  return (<section>
   <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde, quam, perspiciatis dolores sequi eum necessitatibus, aliquam accusamus quas natus possimus voluptas vel. Quisquam molestias expedita repudiandae, maxime doloremque sunt.</p>
  </section>)
}

function App() {
  return (
    <div>
      <Move/>
    </div>
  )
}

export default App