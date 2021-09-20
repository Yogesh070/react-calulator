import {React, useState} from 'react'
import Key from './Key'
import './Calculator.css'
function Calculator() {
    const nums=[1,2,3,4,5,6,7,8,9];
    const operationKeys=['/','*','-','+'];
    const operations=['/','*','-','+','%','.'];
    const [screenDigit, setscreenDigit] = useState('0');
    const [historyLog, sethistoryLog] = useState([]);

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
        operations.forEach(setbool);
        if (checker) return
        setscreenDigit(screenDigit + operationKey);
    }
   
    const clearScreen=()=>{
        setscreenDigit('0')
    }
    function evil(fn) {
        // eslint-disable-next-line
        return new Function('return ' + fn)();
      }
      
    const calulateResult=()=>{
        if (screenDigit.length===1) return
        let result =evil(screenDigit);
        if (result.toString().includes('.')) {
           setscreenDigit(result.toFixed(3).toString());
        }
        else{
          setscreenDigit(result.toString());  
        }
        
        sethistoryLog([...historyLog,`${screenDigit}=${result}`])
    }
    const randomNum=()=>{
        let randomNum=Math.random()*10;
        setscreenDigit(screenDigit + Math.floor(randomNum));
    }
    const backSpace=()=>{
        console.log('hi');
        console.log(screenDigit.substring(0,screenDigit.length-1));
        setscreenDigit(prev=>prev.substring(0, screenDigit.length - 1));
    }
    const generateRandomColor=()=>{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor}`;
    }
    return (
        <div className="calculator">
            <div className="history-log hidden">
                {historyLog.reverse().map(history=><h2 style={{color:generateRandomColor()}}>{history}</h2>)}
            </div>
            <div className="calculator-body">
                <div className="screen">
                    <h4>{historyLog[historyLog.length-1]}</h4>
                    <div className="result" style={{wordWrap:"break-word"}}>
                    <h2 style={{fontSize:'50px'}}>{screenDigit}</h2>
                    </div>
                </div>
                <div className="keyboard">
                    <div className="top-pad">
                    <Key keyboardKey='AC' onTap={clearScreen} color='#229A89' />
                    <Key keyboardKey='%' onTap={()=>onOperationButtonClick('%')} color='#229A89' />
                    <Key keyboardKey={'Ran'} onTap={randomNum}/>

                    </div>
                    <div className="numbers-key">
                        <div className="numbers-key-grid">
                            {nums.reverse().map(num=><Key key={num}  keyboardKey={num} onTap={()=>onButtonClick(num)}/>)}
                        </div>
                        
                    </div>
                    <div className="operation-key">
                        {operationKeys.map(operationKey=><Key key={operationKey} onTap={()=>onOperationButtonClick(operationKey)} color='#D26C6F' keyboardKey={operationKey}/> )}
                        <Key keyboardKey='=' onTap={calulateResult}/>
                    </div>
                    <div className="bottom-pad">
                        <div className="bottom-pad-grid">
                        <Key keyboardKey='back' onTap={backSpace}/>
                        <Key keyboardKey='0' onTap={()=>onButtonClick('0')}/>
                        <Key keyboardKey='.' onTap={()=>onButtonClick('.')}/></div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Calculator
