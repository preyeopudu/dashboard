import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles/sidebar.css";
import {
  faBarcode,
  faChartPie,
  faHome,
  faWallet,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Links = (props) => {
  return (
    <div className="linkcontainer">
      <FontAwesomeIcon
        style={{ fontSize: "20px" }}
        icon={props.icon}
        color="#A9A9A9"
      />
      <p className="linktext">{props.text}</p>
    </div>
  );
};

const Sidebar = (props) => {
  return (
    <div className={props.open ? "sidebarContainer open" : "sidebarContainer"}>
      <div className="close">
        <FontAwesomeIcon
          style={{ fontSize: "26px" }}
          icon={faTimes}
          color="#A9A9A9"
          onClick={() => {
            props.HandleClick();
          }}
        />
      </div>
      <h1 style={{ color: "white", fontSize: "40px", marginTop: "80px" }}>
        Rise.
      </h1>
      <div className="linkscontainer">
        <Links text="Home" icon={faHome} />
        <Links text="Credit" icon={faChartPie} />
        <Links text="Wallet" icon={faWallet} />
        <Links text="Services" icon={faBarcode} />
      </div>
    </div>
  );
};

export default Sidebar;
