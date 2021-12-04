import React from "react";
import "./styles/send.css";
import { faCreditCard, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jane from "../assets/images/jane.jpeg";
import John from "../assets/images/john.jpeg";
import Add from "../assets/images/add.png";

const Send = () => {
  return (
    <div className="sendcontainer">
      <div className="accountdetails">
        <div>
          <div className="detailscontainer">
            <p className="detailtitle">Balance</p>
            <p className="datailamount">$140.420</p>
          </div>

          <div className="detailscontainer">
            <p className="detailtitle">Credit Limit</p>
            <p className="datailamount">$150.000</p>
          </div>
        </div>

        <p className="sendto">Send money to</p>
        <div className="peopleimage">
          <img src={John} alt="person" />
          <img src={Jane} alt="person" />
          <img src={John} alt="person" />
          <img src={Add} alt="add" />
        </div>

        <div className="form">
          <label>Card number</label>
          <div className=" inputcontainer">
            <FontAwesomeIcon
              style={{ fontSize: "16px" }}
              icon={faCreditCard}
              color="black"
            />
            <input className="input" placeholder="Search" />
          </div>

          <label>Sum</label>
          <div className=" inputcontainer">
            <FontAwesomeIcon
              style={{ fontSize: "16px" }}
              icon={faDollarSign}
              color="black"
            />
            <input className="input" placeholder="Search" />
          </div>

          <button className="sendbutton">Send money</button>
        </div>
      </div>
    </div>
  );
};

export default Send;
