import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Ensure correct import

function Shop() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then(response => response.json())
      .then(data => {
        setDrinks(data.drinks || []);
      })
      .catch(error => console.error("Error fetching drinks:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Lemonade Shop 🛒</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {drinks.length === 0 ? (
          <p>Loading drinks...</p>
        ) : (
          drinks.map(drink => (
            <div key={drink.idDrink} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} width="100" />
              <h3>{drink.strDrink}</h3>
              <button onClick={() => dispatch(addToCart({ id: drink.idDrink, name: drink.strDrink }))}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;