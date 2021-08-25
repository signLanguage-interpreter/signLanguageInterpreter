import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [user, setUser] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = user;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(`${e.currentTarget.name}: ${e.currentTarget.value}`);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    // axios
  };
  return (
    <div className="login_wrapper">
      <form className="login" onSubmit={onSubmit}>
        <div className="txt">아이디</div>
        <input
          name="id"
          placeholder="아이디를 입력하세요."
          className="input"
          value={id}
          onChange={onChange}
        ></input>
        <div className="txt">비밀번호</div>
        <input
          name="pw"
          placeholder="비밀번호를 입력하세요."
          className="input"
          value={pw}
          onChange={onChange}
        ></input>
        <button type="submit" className="loginBtn">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
