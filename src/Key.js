import React from 'react'
import './Calculator.css'
function Key({keyboardKey,color,onTap}) {
    return (
        <div className="key" onClick={onTap} >
            <p style={{color:color}}>{keyboardKey}</p>
        </div>
    )
}

export default Key
