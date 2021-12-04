import React from "react";
import "./styles/board.css";
import Amazon from "../assets/images/amazon.png";
import Starbuck from "../assets/images/starbucks.png";
import Youtube from "../assets/images/youtube.png";

const TableRow = (props) => {
  return (
    <tr className="tablerow">
      <td>
        <div className="transactionname">
          <img
            src={props.image}
            className="transactionimage"
            alt="list-img"
          ></img>
          <div className="transactionnamecontainer">
            <p className="rowname">{props.name}</p>
            <p className="rowdate">{props.date}</p>
          </div>
        </div>
      </td>

      <td>
        <div className="">
          <ul className="categorylist">
            <li className={props.color}>{props.category}</li>
          </ul>
        </div>
      </td>

      <td>
        <div className="">
          <p style={{ fontWeight: "bolder", letterSpacing: "0.2px" }}>
            +${props.cashback}
          </p>
        </div>
      </td>

      <td>
        <div className="">
          <p>
            <span style={{ fontWeight: "bolder" }}>-${props.amount}</span>.00
          </p>
        </div>
      </td>
    </tr>
  );
};

const Board = () => {
  return (
    <div className="tablecontainer">
      <table className="table">
        <thead>
          <tr>
            <td>Name of transaction</td>
            <td>Category</td>
            <td>Cashback</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <TableRow
            amount="242"
            cashback="2"
            category="Electronic devices"
            name="Amazon"
            date="Apr 24,2021 at 1:40pm"
            color="red"
            image={Amazon}
          />

          <TableRow
            amount="32"
            cashback="23"
            category="cafe and restaurant"
            name="Starbucks"
            image={Starbuck}
            color="blue"
            date="Apr 22 2021 at 2:43pm"
          />
          <TableRow
            amount="112"
            cashback="4"
            category="Social media"
            name="Youtube"
            image={Youtube}
            color="black"
            date="Apr 15 2021 at 11:23am"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Board;
