import React from "react";
import Board from "./board";
import Graph from "./Graph";
import "./styles/info.css";
import Transactions from "./Transactions";

const Info = () => {
  return (
    <div className="graphcontainer">
      <div className="graphRow">
        <div className="balance">
          <p style={{ fontWeight: "200" }} className="mybalance">
            {" "}
            My Balance
          </p>
          <p className="balances">$5.750.20</p>
        </div>
        <div className="graphselctors">
          <button>Day</button>
          <button>Week</button>
          <button style={{ backgroundColor: "black", color: "white" }}>
            Month
          </button>
          <button>Year</button>
        </div>
      </div>
      <div className="graphholder">
        <Graph />
      </div>

      <Transactions />
      <Board />
    </div>
  );
};

export default Info;
