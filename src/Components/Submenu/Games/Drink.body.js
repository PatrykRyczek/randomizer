import React, { useState, useEffect } from "react";
import { Container } from "../Styles";
function DrinkBody() {
  const [array, setDrinks] = useState([]);

  const fetchData = async () => {
    try {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((results) => results.json())
        .then((data) => {
          setDrinks(data.drinks);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      {array.map((drink) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strDrinkThumb,
          strInstructions,
        } = drink;
        return (
          <div key={idDrink}>
            <h2>{strDrink}</h2>
            <img src={strDrinkThumb + "/preview"} alt={strDrink} />
            <p>{strCategory}</p>
            <span className="instructions">{strInstructions}</span>
          </div>
        );
      })}
      <button onClick={fetchData}>PRESS ME</button>
      <span>PRESS BUTTON TO DRINK SOMETHING ELSE</span>
    </Container>
  );
}

export default DrinkBody;
