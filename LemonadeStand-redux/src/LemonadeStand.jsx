import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellLemonade, buyLemons } from "./redux/profitSlice";

function LemonadeStand() {
  const profit = useSelector((state) => state.profit.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lemonade Stand 🍋</h1>
      <h2>Profit: ${profit}</h2>
      <button onClick={() => dispatch(sellLemonade())}>Sell Lemonade (+$5)</button>
      <button onClick={() => dispatch(buyLemons())} style={{ marginLeft: "10px" }}>
        Buy Lemons (-$2)
      </button>
    </div>
  );
}

export default LemonadeStand;