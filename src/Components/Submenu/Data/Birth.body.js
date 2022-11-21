import React, { useState } from "react";
import { Container } from "../Styles";

function BirthBody() {
  const [data, setData] = useState([]);

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function getRandomDate() {
    var generate = randomDate(new Date(1900, 0, 1), new Date());
    var finaldata = generate.toLocaleDateString("en-EN", options);
    setData(finaldata);
  }

  return (
    <Container>
      <h1>Random birthday generator</h1>
      <button onClick={getRandomDate}>GENERATE</button>
      <span>{data}</span>
    </Container>
  );
}

export default BirthBody;
