// //App
// import React from 'react'
// import PortalPrac01 from './components/Practice/PortalPrac01'

// function App() {
//   return (
//     <div>
//      <PortalPrac01/>     
//     </div>
//   )
// }

// export default App


// //PortalPrac01

// import React, { useState } from 'react'
// import PortalPrac02 from './PortalPrac02';

// function PortalPrac01() {

//     const [inputValue, setInputValue] = useState('');
//     const [copied, setCopied] = useState(false);

//     const handleClick = () => {
//        navigator.clipboard.writeText(inputValue).then(()=> {
//         setCopied(true);
//         setTimeout(() => 
//           setCopied(false), 5000)
//        })
//     }

//   return (
//     <div>
//         <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
//         <button onClick={handleClick}>Copy</button>

//         <PortalPrac02 copiedHold={copied}/>
//     </div>


//   )
// }

// export default PortalPrac01

// //PortalPrac02

// import { createPortal } from 'react-dom'
// import React from 'react'

// function PortalPrac02({copiedHold}) {
//   return createPortal(
//     <div>

//     {copiedHold && (
//         <div style={{position: "absolute", bottom: "3rem"}}>Copied to clipboard</div>
//     )} {/*2.38.53*/}

//     </div>,
//     document.querySelector("#popup-content")
//   )
// }

// export default PortalPrac02

// //index html

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Vite + React</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <div id="popup-content"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>

