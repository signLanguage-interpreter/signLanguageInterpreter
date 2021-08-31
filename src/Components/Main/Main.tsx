import React, { useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { store } from "../../App";
import "./Main.scss";

const Main: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  // ref
  const login_text = useRef<HTMLButtonElement>(null);

  // logout_action
  const logout_action = (logged: Boolean) => {
    return {
      type: "LOGOUT",
      payload: {
        logged: logged,
      },
    };
  };

  // event
  const onLoginClick = (e: any) => {
    let btn_txt = login_text.current!.innerText;
    if (btn_txt === "로그인") {
      history.push("/login");
    } else if (btn_txt === "로그아웃") {
      login_text.current!.innerText = "로그인";
      store.dispatch(logout_action(false));
    }
  };

  const onRegiClick = () => {
    sessionStorage.getItem("jwt_token") === null
      ? alert("로그인이 필요합니다.")
      : history.push("/register");
    // history.push("/register");
  };

  return (
    <main className="main">
      <h2>SLT</h2>
      <button className="link" onClick={onLoginClick} ref={login_text}>
        {sessionStorage.getItem("jwt_token") === null ? "로그인" : "로그아웃"}
      </button>
      <button className="link" onClick={onRegiClick}>
        신청
      </button>
    </main>
  );
};

export default Main;
