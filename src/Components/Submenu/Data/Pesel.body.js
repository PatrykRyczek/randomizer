import React, { useState } from "react";
import { Container } from "../Styles";

function PeselBody() {
  const [pesel, setPesel] = useState({ pesel: 0 });
  const [db, setDb] = useState({ day: 0, month: 0, year: 0 });

  function rand(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  function getMonthOffsetForPesel(century) {
    switch (century) {
      case 18:
        return 80;
      case 19:
        return 0;
      case 20:
        return 20;
      case 21:
        return 40;
      case 22:
        return 60;
    }
  }

  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function last2Digits(number) {
    var n = Math.floor(number % 100);
    return ("00" + n.toString(10)).slice(-2);
  }

  function computePeselControlDigit(rawPesel) {
    var peselDigits = rawPesel.split("").map(function (d) {
      return +d;
    });
    var weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

    var sum1 = 0,
      i;
    for (i = 0; i < weights.length; i += 1) {
      sum1 += weights[i] * peselDigits[i];
    }

    sum1 = (10 - (sum1 % 10)) % 10;
    return sum1;
  }

  function generatePesel() {
    var birthYear = rand(1800, 2300);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset;

    var fourRandomDigits = ("0000" + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel =
      last2Digits(birthYear) +
      last2Digits(peselMonth) +
      last2Digits(birthDay) +
      fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    setPesel(rawPesel + controlDigit);
    setDb({ day: birthDay, month: birthMonth, year: birthYear });
  }
  var last = String(pesel).slice(-3, -2);

  return (
    <Container>
      <h1>Random pesel generator</h1>
      <button onClick={generatePesel}>GENERATE</button>
      <span>{isNaN(pesel) ? "" : "Your random pesel: " + pesel}</span>
      <span>
        Date of birth: {db.day < 10 ? "0" + db.day : db.day}.
        {db.month < 10 ? "0" + db.month : db.month}.{db.year}
      </span>
      <span>Sex: {last % 2 ? "Men" : "Women"}</span>
    </Container>
  );
}

export default PeselBody;
