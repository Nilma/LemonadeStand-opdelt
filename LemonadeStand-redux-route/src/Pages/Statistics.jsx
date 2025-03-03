import React from "react";
import { useSelector } from "react-redux";

function Statistics() {
  const history = useSelector((state) => state.profit.history);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Profit Statistics</h1>
      {history.length === 0 ? (
        <p>No profit history available</p>
      ) : (
        <ul>
          {history.map((profit, index) => (
            <li key={index}>Profit at step {index + 1}: ${profit}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Statistics;