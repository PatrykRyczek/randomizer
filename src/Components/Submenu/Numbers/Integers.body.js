import React, { useState } from "react";
import { Container, Inputs } from "../Styles";
function IntegersBody() {
  const [int, setInt] = useState();
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(100);

  function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function getRange() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    setMax(max);
    setMin(min);
    setInt(rand(min, max));
  }

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  return (
    <Container>
      <h1>Random number (integer)</h1>
      <Inputs>
        <label for="min">Min:</label>
        <input
          type="number"
          id="min"
          defaultValue="10"
          placeholder="10"
          min="0"
          onKeyPress={preventMinus}
        ></input>
        <label for="min">Max:</label>
        <input
          min="1"
          type="number"
          id="max"
          defaultValue="100"
          placeholder="100"
          onKeyPress={preventMinus}
        ></input>
      </Inputs>
      <button onClick={getRange}>PRESS ME</button>
      <span>
        Your number between {min} and {max} :{" "}
        {min > max ? "Min cannot  be greater than max!" : int}
      </span>
    </Container>
  );
}

export default IntegersBody;
