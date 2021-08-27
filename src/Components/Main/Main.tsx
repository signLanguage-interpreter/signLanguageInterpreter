import React, { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Main.scss";

const Main: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const session_login = sessionStorage.getItem("login");
  const login_text = useRef<HTMLButtonElement>(null);

  const onLoginClick = (e: any) => {
    let btn_txt = login_text.current!.innerText;
    if (btn_txt === "로그인") {
      history.push("/login");
    } else if (btn_txt === "로그아웃") {
      login_text.current!.innerText = "로그인";
      sessionStorage.setItem("login", "false");
    }
  };

  const onRegiClick = (e: any) => {
    if (session_login === "true") {
      history.push("/register");
    } else if (session_login === "false") {
      alert("로그인을 먼저 해주세요.");
    }
  };

  return (
    <main className="main">
      <h2>SLT</h2>
      <button className="link" onClick={onLoginClick} ref={login_text}>
        {session_login === "true" ? "로그아웃" : "로그인"}
      </button>
      <button className="link" onClick={onRegiClick}>
        신청
      </button>
    </main>
  );
};

export default Main;
