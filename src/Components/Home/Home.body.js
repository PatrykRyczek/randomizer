import React from "react";
import {
  Container,
  Description,
  Random,
  Left,
  Right,
  Img,
  Img2,
} from "./Home.styles";

function HomeBody() {
  function getRand() {
    var min = 10000;
    var max = 999999;
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

  (function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(function () {
      getRand();
      loop();
      document.getElementById("cont").innerHTML = getRand();
    }, rand);
  })();

  return (
    <Container>
      <Description>
        <Left>
          <h1>randomizer</h1>
          <h3>project was created as a front-end developer practise </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare orci ac mi laoreet ultrices. Nam porttitor dapibus pretium.
            Maecenas aliquam sapien non ullamcorper porta.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Proin ornare orci ac mi laoreet
            ultrices.
          </p>
        </Left>
        <Img />
      </Description>
      <Random>
        <Img2 />
        <Right>
          <span id="cont"></span>
        </Right>
      </Random>
    </Container>
  );
}

export default HomeBody;
