import React from 'react'
import { useState ,useEffect} from 'react';
import "./style.css";

export const Test1 = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      if (counter < 10) {
        setCounter(counter + 1);
      }
    };
  
    const decrementCounter = () => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    };
  
    const getCounterColor = () => {
      if (counter >= 0 && counter <= 4) {
        return "green";
      } else if (counter >= 5 && counter <= 9) {
        return "blue";
      } else {
        return "red";
      }
    };
  
    return (
      <div className="Test1">
        <h1 className={getCounterColor()}>{counter}</h1>
        <div className="button-container">
          <button onClick={decrementCounter}>-</button>
          <button onClick={incrementCounter}>+</button>
        </div>
      </div>
    )
}

export default Test1
