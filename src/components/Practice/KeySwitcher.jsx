import React, { useState } from 'react'

function KeySwitcher() {
    const [sw, setSw] = useState(true);
  return (
    <div>
        {sw ? (
            <span>Dark</span>
        ) : (
            <span>Light</span>
        )}
        <br/>
        <input type="text" key={sw ? "dark" : "light"}/>
        <button onClick={() => setSw((s) => !s)}>Click</button>

    </div>
  )
}

export default KeySwitcher