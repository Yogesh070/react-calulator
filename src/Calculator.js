import React,{useEffect, useState} from 'react'
import Key from './Key'
import './Calculator.css'
function Calculator() {
    const nums=[1,2,3,4,5,6,7,8,9,0];
    const operationKeys=['/','*','-','+','='];

    const [screenDigit, setscreenDigit] = useState(0);
    const [historyLog, sethistoryLog] = useState([]);
    return (
        <div className="calculator">
            <div className="screen">
                {/* <h4>308*42</h4>
                <h2>12,936</h2> */}

                <h4>{historyLog[0]}</h4>
                <h2>12,936</h2>
            </div>
            <div className="keyboard">
                <div className="numbers-key">
                    {nums.reverse().map(num=><Key key={num}  keyboardKey={num}/> )}
                    {operationKeys.map(operationKey=><Key key={operationKey} color='#D26C6F' keyboardKey={operationKey}/> )}
                </div>
                    
                {/* <Key keyboardKey='AC'/> */}
                {/* <div className="opertationKeys">
                    {operationKeys.map(operationKey=><Key key={operationKey} keyboardKey={operationKey}/> )}
                </div> */}
            </div>
        </div>
    )
}

export default Calculator
