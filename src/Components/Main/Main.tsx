import React, { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { store } from "../../App";
import logo from "../img/logo.png";
import "./Main.scss";

const Main: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
};

export default Main;
