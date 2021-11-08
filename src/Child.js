import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleColorChange, color }) {

  function handleClick(){
    const newColor = getRandomColor();
    handleColorChange(newColor)
  }

  return <div style = {{backgroundColor: color}} onClick={handleClick} className="child" />;
}

export default Child;
