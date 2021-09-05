import React, { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { store } from "../../App";
import Header from "../Header/Header";
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

  let login_out_btn;
  let manager_regi_btn;
  let manager_modify_btn;
  let modify_btn;

  // event
  const onLoginClick = (e: any) => {
    let btn_txt = login_text.current!.innerText;
    if (btn_txt === "로그인") {
      history.push("/login");
    } else if (btn_txt === "로그아웃") {
      store.dispatch(logout_action(false));
      login_text.current!.innerText = "로그인";
      history.push("/main");
    }
  };

  const onRegiClick = () => {
    sessionStorage.getItem("authorization") === null
      ? alert("로그인이 필요합니다.")
      : history.push("/register");
  };

  const onMangerClick = () => {
    history.push("/manager");
  };

  const onModifyClick = () => {
    history.push("/modifyInfo");
  };

  // conditional rendering
  if (sessionStorage.getItem("authorization") === null) {
    login_out_btn = (
      <button className="link" onClick={onLoginClick} ref={login_text}>
        로그인
      </button>
    );
  } else {
    login_out_btn = (
      <button className="link" onClick={onLoginClick} ref={login_text}>
        로그아웃
      </button>
    );
  }

  if (sessionStorage.getItem("authorization") === null) {
    manager_regi_btn = null;
  } else {
    manager_regi_btn = (
      <button className="link manager_regi" onClick={onMangerClick}>
        통역사 등록
      </button>
    );
  }

  if (sessionStorage.getItem("authorization") === null) {
    manager_modify_btn = null;
  } else {
    manager_modify_btn = (
      <button className="link manager_regi" onClick={onMangerClick}>
        통역사 수정
      </button>
    );
  }

  if (sessionStorage.getItem("authorization") === null) {
    modify_btn = null;
  } else {
    modify_btn = (
      <button className="link modify" onClick={onModifyClick}>
        수정
      </button>
    );
  }

  return (
    <main className="main">
      <Header></Header>
      {login_out_btn}
      <button className="link" onClick={onRegiClick}>
        신청
      </button>
      {modify_btn}
      {manager_regi_btn}
      {manager_modify_btn}
    </main>
  );
};

export default Main;
