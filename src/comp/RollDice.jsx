import React, { useState } from "react";
import "./RollDice.css";
const RollDice = ({currentDice,rollDice,reset,setVisible}) => {
  console.log(currentDice)
  return (
    <div className="roll">
      <div onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on the Dice to Roll</p>
      <button className="btn1" onClick={reset}>Reset Score</button>
      <button className="btn2" onClick={setVisible}>Show Rules</button>
    </div>
  );
};

export default RollDice;
