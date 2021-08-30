import React, { useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { store } from "../../App";
import "./Main.scss";

const Main: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  // ref
  const login_text = useRef<HTMLButtonElement>(null);

  // logout_action
  const logout_action = (user: Record<string, string>, logged: Boolean) => {
    return {
      type: "LOGOUT",
      payload: {
        user: user,
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
      store.dispatch(
        logout_action(
          {
            username: "",
            password: "",
            email: "",
            userNickName: "",
            cellphone: "",
            birth: "",
            gender: "",
          },
          false
        )
      );
    }
  };

  const onRegiClick = () => {
    sessionStorage.getItem("user") !== null
      ? history.push("/register")
      : alert("로그인이 필요합니다.");
  };

  return (
    <main className="main">
      <h2>SLT</h2>
      <button className="link" onClick={onLoginClick} ref={login_text}>
        {sessionStorage.getItem("user") !== null ? "로그아웃" : "로그인"}
      </button>
      <button className="link" onClick={onRegiClick}>
        신청
      </button>
    </main>
  );
};

export default Main;
