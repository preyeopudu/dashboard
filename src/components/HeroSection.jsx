import React from "react";
import Info from "./Info";
import "./styles/herosection.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = (props) => {
  return (
    <div className="heroSectionContainer">
      <p className="heroHeader">
        Welcome back,<b>Calvin</b>
      </p>

      <div className="bar" onClick={() => props.HandleClick()}>
        <FontAwesomeIcon
          style={{ fontSize: "20px" }}
          icon={faBars}
          color="black"
        />
      </div>
      <Info />
    </div>
  );
};

export default HeroSection;
