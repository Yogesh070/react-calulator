import {React, useState} from 'react'
import Key from './Key'
import './Calculator.css'
function Calculator() {
    const nums=[1,2,3,4,5,6,7,8,9,0];
    const operationKeys=['/','*','-','+'];
    const [screenDigit, setscreenDigit] = useState('0');
    const [historyLog, sethistoryLog] = useState(['3*2']);

    const onButtonClick=(button) =>{  
        if (button==='.' && screenDigit.includes('.')) {
            return
        }
        if (screenDigit.charAt(0)==='0') {
            setscreenDigit('')
        }
        setscreenDigit(prev=>prev + button);

        console.log(screenDigit);
    }
    const onOperationButtonClick=(operationKey)=>{
        let checker=false;
        const setbool=(e)=>{
        if(screenDigit.endsWith(e)){ checker=true}
        }
        operationKeys.forEach(setbool);
        if (checker) return
        setscreenDigit(screenDigit + operationKey);
    }
   
    const clearScreen=()=>{
        setscreenDigit('0')
    }
    function evil(fn) {
        return new Function('return ' + fn)();
      }
      
    const calulateResult=()=>{
        let result =evil(screenDigit);
        setscreenDigit(result.toString())
        sethistoryLog([...historyLog,`${screenDigit}=${result}`])
    }
    return (
        <div className="calculator">
            <div className="screen">
                <h4>{historyLog[historyLog.length-1]}</h4>
                <h2 style={{fontSize:'50px'}}>{screenDigit}</h2>
            </div>
            <div className="keyboard">
                <div className="numbers-key">
                    {nums.reverse().map(num=><Key key={num}  keyboardKey={num} onTap={()=>onButtonClick(num)}/>)}
                    {operationKeys.map(operationKey=><Key key={operationKey} onTap={()=>onOperationButtonClick(operationKey)} color='#D26C6F' keyboardKey={operationKey}/> )}
                </div>
                <Key keyboardKey='AC' onTap={clearScreen}/>
                <Key keyboardKey='.' onTap={()=>onButtonClick('.')}/>
                <Key keyboardKey='=' onTap={calulateResult}/>
            </div>
        </div>
    )
}

export default Calculator
