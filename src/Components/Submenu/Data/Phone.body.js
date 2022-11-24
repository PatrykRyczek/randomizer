import React, { useState } from "react";
import { Container } from "../Styles";
import countrycodes from "../countrycodes.json";

function PhoneBody() {
  const [select, setSelect] = useState();
  const [length, setLenght] = useState([9]);
  const [nr, setNr] = useState();

  const dialcodes = countrycodes.map((countrycode) => ({
    name: countrycode.name,
    value: countrycode.dial_code,
  }));

  function getNumber(length) {
    var result = "";
    var first = "123456789";
    var numbers = "0123456789";
    var numbersLength = numbers.length;
    result += first.charAt(Math.floor(Math.random() * numbersLength - 1));
    for (var i = 0; i < length - 1; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    return result;
  }

  function getNumber2() {
    let length = document.getElementById("inputLength").value;
    setLenght(length);
    let select = document.getElementById("countries").value;
    setSelect(select);
    setNr(getNumber(length));
  }

  return (
    <Container>
      <h1>Random phone number generator</h1>
      <label for="plenght">How many digits?</label>
      <input type="number" id="inputLength" defaultValue="9" min="4" max="13" />
      <select id="countries">
        <option>Select country</option>
        {dialcodes.map((country, key) => (
          <option key={key} value={country.value} name={country.name}>
            {country.value + " "}
            {country.name}
          </option>
        ))}
      </select>
      <button onClick={getNumber2}>GENERATE</button>
      <span>
        Your phone number: {select != "Select country" ? select : ""} {nr}
      </span>
    </Container>
  );
}

export default PhoneBody;
