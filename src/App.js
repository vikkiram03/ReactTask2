import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react';

const App = () => {
    const [inputNum, setInputNum] = useState(0);
    const [calculatedNum, setCalculatedNum] = useState(0);
    const [operator, setOperator] = useState('');
    const [isDecimal, setIsDecimal] = useState(false);
    const [decimalCount, setDecimalCount] = useState(1);
    const [monitor, setMonitor] = useState('');

    useEffect(() => {
        setMonitor(inputNum);
    },[inputNum])

    useEffect(() => {
        setMonitor(calculatedNum)
    },[calculatedNum])

    const TakeInputNum = (num) => {
        if (isDecimal) {
            num = num/Math.pow(10,decimalCount);
            setDecimalCount(decimalCount + 1);
            setInputNum(parseFloat((inputNum + num).toFixed(decimalCount)));
        }
        else {
            setInputNum(inputNum * 10 + num)
        }
    }

    const TakeOperator = (operator) => {
        setOperator(operator);
        Calculate();
        setInputNum(0);
    }

    const Calculate = () => {
        setIsDecimal(false);
        setDecimalCount(1);
        if (operator === '/' && inputNum === 0) {
            setCalculatedNum(NaN);
            setInputNum(0);
            return;
        }
        if (calculatedNum === 0 && inputNum === 0) {
            return;
        }
        switch(operator) {
            case '+':
                setCalculatedNum(calculatedNum + inputNum);
                break
            case '-':
                setCalculatedNum(calculatedNum - inputNum);
                break
            case '*':
                setCalculatedNum(calculatedNum * inputNum);
                break
            case '/':
                setCalculatedNum(calculatedNum / inputNum);
                break
        }
        if (operator === '') {
            setCalculatedNum(inputNum)
        }
        else {
            setInputNum(0);
        }
        return;
    }

    const GetEqual = () => {
        Calculate();
        setOperator('');
    }

    const Clear = () => {
        setInputNum(0);
        setCalculatedNum(0);
        setMonitor('');
        setOperator('');
    }

    return (
        <div>
            <h1 className="text-center display-1">React Task 2</h1>
            <h6 className="text-center display-6">By 21BCE5919 Vikram Ramkumar</h6>
            <div className="calculator">
                <div className="monitor">
                    <p className="out-put">{monitor}</p>
                </div>
                <div className="keyboard">
                    <div className="keyboard-row">
                        <button onClick={() => {Clear()}} className="one-block blue">AC</button>
                        <button className="one-block blue">-/+</button>
                        <button className="one-block blue">%</button>
                        <button onClick={() => {TakeOperator('/')}} className="one-block red">/</button>
                    </div>

                    <div className="keyboard-row">
                        <button onClick={() => {TakeInputNum(7)}} className="one-block blue">7</button>
                        <button onClick={() => {TakeInputNum(8)}} className="one-block blue">8</button>
                        <button onClick={() => {TakeInputNum(9)}} className="one-block blue">9</button>
                        <button onClick={() => {TakeOperator('*')}} className="one-block red">*</button>                    
                    </div>

                    <div className="keyboard-row">
                        <button onClick={() => {TakeInputNum(4)}} className="one-block blue">4</button>
                        <button onClick={() => {TakeInputNum(5)}} className="one-block blue">5</button>
                        <button onClick={() => {TakeInputNum(6)}} className="one-block blue">6</button>
                        <button onClick={() => {TakeOperator('-')}} className="one-block red">-</button>
                    </div>

                    <div className="keyboard-row">
                        <button onClick={() => {TakeInputNum(1)}} className="one-block blue">1</button>
                        <button onClick={() => {TakeInputNum(2)}} className="one-block blue">2</button>
                        <button onClick={() => {TakeInputNum(3)}} className="one-block blue">3</button>
                        <button onClick={() => {TakeOperator('+')}} className="one-block red">+</button>
                    </div>

                    <div className="keyboard-row">
                        <button onClick={() => {TakeInputNum(0)}} className="two-block blue">0</button>
                        <button onClick={() => {setIsDecimal(true)}} className="one-block blue">.</button>
                        <button onClick={() => {GetEqual()}} className="one-block red">=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;