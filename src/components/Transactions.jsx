import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import "./styles/transaction.css";
const Transactions = () => {
  return (
    <div className="transactioncontainer">
      <div className="transactionsHeader">
        <div className="transactionDetails">
          <p className="transactiontext">Transactions</p>
          <p className="transactiondate">Apr 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
