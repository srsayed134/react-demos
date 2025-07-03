import { createPortal } from 'react-dom'
import React from 'react'

function PortalPrac02({copiedHold}) {
  return createPortal(
    <div>

    {copiedHold && (
        <div style={{position: "absolute", bottom: "3rem"}}>Copied to clipboard</div>
    )} {/*2.38.53*/}

    </div>,
    document.querySelector("#popup-content")
  )
}

export default PortalPrac02