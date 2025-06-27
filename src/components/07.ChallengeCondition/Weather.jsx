import React from 'react'

function Weather() {
    let temp = 25;
    
    if (temp >= 25) {
        return <h1>Hot outside</h1>
    } else if (temp >= 15){
        return <h1>Nice outside</h1>
    } else {
        return <h1>Cold outside</h1>
    }
    
}

export default Weather