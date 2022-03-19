import './styles.css';
import React, {useState} from 'react';
export default function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);

  const [randomNum1, setrandomNum1] = useState(0);
  const [randomNum2, setrandomNum2] = useState(0);

  const [thirdNum, setThirdNum] = useState(0);
  
  const handleRandomNum = () => {
    setrandomNum1(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
    setrandomNum2(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  };

  const thirdRandomNum = () => {
    setThirdNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  };

  var status = "";
  function popUp(){
    if (thirdNum > randomNum1 && thirdNum < randomNum2){
      status = "WIN";
    } 
    else if (thirdNum > randomNum2 && thirdNum < randomNum1){
      status = "WIN";
    }
    else {
      status = "LOSE";    
    }
    alert(status)
  }

  return (
    <div className="hero">
      <div className="container">
          <div className="randomNum">
          <p>
            Card 1: <span>{randomNum1}</span><br/>
            Card 2: <span>{randomNum2}</span>
          </p>
          </div>
          <div>
              <p>Card 3: {thirdNum} </p>
          </div>
          <div>
              <button onClick={() => popUp()}>Get Status</button>
          </div>
            
          <div className="numContainer">
            <div>
              <p>Min: </p>
              <input type="number" value={minVal} onChange={e => setMinVal(+e.target.value)} />
            </div>
            <div>
              <p>Max: </p>
              <input type="number" value={maxVal} onChange={e => setMaxVal(+e.target.value)}/>
            </div>
          </div>
        <button onClick={handleRandomNum}>Get Random Number</button>
      </div>
      <div className="container2">
      <button onClick={thirdRandomNum}>Deal</button>
      </div>
      <div className="container3">
        <button onClick>No Deal</button>
      </div>
    
    </div>
  );
}

