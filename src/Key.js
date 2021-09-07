import React from 'react'
import './Calculator.css'
function Key({keyboardKey,color}) {
    const keyClick=()=>{
        console.log(keyboardKey);
    }
    return (
        <div className="key" onClick={keyClick} >
            <p style={{color:color}}>{keyboardKey}</p>
        </div>
    )
}

export default Key
