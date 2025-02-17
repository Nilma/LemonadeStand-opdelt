import React, { useState } from "react";

function LemonadeStand() {
  // Initialize state for profit
  const [profit, setProfit] = useState(0);

  // Sell Lemonade (Increase Profit)
  const sellLemonade = () => {
    setProfit(profit + 5); // Each sale increases profit by 5
  };

  // Buy Lemons (Decrease Profit)
  const buyLemons = () => {
    setProfit(profit - 2); // Each purchase decreases profit by 2
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lemonade Stand 🍋</h1>
      <h2>Profit: ${profit}</h2>
      <button onClick={sellLemonade}>Sell Lemonade (+$5)</button>
      <button onClick={buyLemons} style={{ marginLeft: "10px" }}>
        Buy Lemons (-$2)
      </button>
    </div>
  );
}

export default LemonadeStand;