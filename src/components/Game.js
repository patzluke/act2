import React, {Component, useState} from 'react'

function Game (){
    const num1 = Math.floor(Math.random()*21);
    const num2 = Math.floor(Math.random()*21);
    const num3 = Math.floor(Math.random()*21);

    function randomizer(){
    const num1 = Math.floor(Math.random()*21);
    const num2 = Math.floor(Math.random()*21);
    }

    const [roundNum, setCount] = useState(1);

    const [totalScore, setCountz] = useState(0);
    
   

    function deals(){
        if(num1 !== num2){
            return(
                <div>
                    <button onClick={checkerBetween}>Deal</button>
                    <button onClick={noDeal}>No Deal</button>  
                </div>
            )  
        }else{
            return(
            <div>
                <button onClick={checkHigh}>Higher</button>
                <button onClick={checkLow}>Lower</button>
            </div> 
            )
        }
    }

    function checkerBetween(){
        if((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
            alert("WIN \nYour number: " + num3.toString()); 
            setCountz(totalScore + 1);
        }else {
            alert("LOSE \nYour number: " + num3.toString())
            setCountz(totalScore - 1);
        }
        nextRound()
    }

    function noDeal(){
        
        setCountz(totalScore - 0.5);
        nextRound()
    }

    function checkHigh(){
        if(num3 > num2){
            alert("WIN \nYour number:" + num3.toString());
            setCountz(totalScore + 1);
        } else {
            alert("LOSE \nYour number:" + num3.toString());
            setCountz(totalScore - 1);
        }
        nextRound()
    }

    function checkLow(){
        if(num3 < num2){
            alert("WIN \nYour number:" + num3.toString());
            setCountz(totalScore + 1);
        } else {
            alert("LOSE \nYour number:" + num3.toString());
            setCountz(totalScore - 1);
        }
        nextRound()
    }
    function finished(){       
        alert("The game is finished and will now reset");
        alert("Your total Score: " + totalScore);
        setCountz(totalScore - totalScore);
        setCount(roundNum - 5);
        }

    function nextRound(){        
        if(roundNum !== 6){
            setCount(roundNum + 1);
        }
        randomizer();
    }
        return (
        <div>
        {"Current Score: " + totalScore}
        {roundNum > 5 && <h1>Please Reset the Game</h1>}
        {roundNum > 5 ? <button onClick={finished}>RESET</button> : <h1>Round {roundNum}</h1>}
        <h1>{num1}</h1>
        <h1>{num2}</h1>
        {deals()}
        </div>
        )
    
}

export default Game