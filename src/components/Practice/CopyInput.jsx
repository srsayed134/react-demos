import React, { useState } from 'react'

function CopyInput() {
    const [inputValue, setInputValue] = useState("")
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            setTimeout(() =>setCopied(false), 2000)
        })
    }

  return (
    <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default CopyInput