import React from "react";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MasterCard from "../assets/images/mastercard.png";
import BankLogo from "../assets/images/bank.png";
import "./styles/card.css";
import Send from "./Send";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardtop">
        <div className="searchcontainer">
          <FontAwesomeIcon
            style={{ fontSize: "20px" }}
            size={200}
            icon={faSearch}
            color="#A9A9A9"
          />
          <input className="searchbar" placeholder="Search" />
        </div>

        <FontAwesomeIcon
          style={{ margin: "7px", fontSize: "20px" }}
          size={200}
          icon={faBell}
          color="black"
        />
      </div>

      <p className="mycard">My cards</p>

      <div className="card">
        <div className="cardheader">
          <div className="cardtitle">
            <p style={{ fontWeight: "light", fontSize: "12px" }}>
              Current Balance
            </p>
            <p
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                marginTop: "2px",
              }}
            >
              $5.750.20
            </p>
          </div>

          <img src={BankLogo} alt="bank-logo" className="banklogo" />
        </div>

        <div className="cardcode">
          <p>****</p>
          <p>****</p>
          <p>****</p>
          <p>1269</p>
        </div>

        <div className="cardfooter">
          <div className="carddate">
            <div className="cardvalid">
              <div className="carddate">
                <p>VALIDTHRU</p>
                <p>12/23</p>
              </div>

              <div className="CVV">
                <p>CVV</p>
                <p>***</p>
              </div>
            </div>
          </div>

          <div className="cardimage">
            <img src={MasterCard} alt="mastercard" className="mastercard" />
            <p>Master card</p>
          </div>
        </div>
      </div>

      <Send />
    </div>
  );
};

export default Card;
