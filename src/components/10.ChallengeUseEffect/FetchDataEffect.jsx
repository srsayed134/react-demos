import React, { useEffect, useState } from 'react'

function FetchDataEffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getName() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const dataHold = await response.json();

            if(dataHold && dataHold.length) setData(dataHold);
        }
        getName();
    }, [])




  return (
    <div>
        <ul> {data.map((todo) => (
            <section key={todo.id}>
             <li>{todo.title}</li>
             <li>This i body ---{todo.body}</li>
            </section>
        ))}</ul>
    </div>
  )
}

export default FetchDataEffect