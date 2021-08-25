import React, { useState } from "react";
import "./Join.scss";

const Join = () => {
  const [user, setUser] = useState({
    name: "",
    id: "",
    pw: "",
    phone: "",
    email: "",
    birth: "",
    gender: "",
  });
  const { name, id, pw, phone, email, birth, gender } = user;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="join_wrapper">
      <form className="join" onSubmit={onSubmit}>
        <div className="txt">이름</div>
        <input
          className="input"
          name="name"
          value={name}
          onChange={onChange}
        ></input>
        <div className="txt">아이디</div>
        <input
          className="input"
          name="id"
          value={id}
          onChange={onChange}
        ></input>
        <div className="txt">비밀번호</div>
        <input
          className="input"
          name="pw"
          value={pw}
          onChange={onChange}
        ></input>
        <div className="txt">핸드폰번호</div>
        <input
          className="input"
          name="phone"
          value={phone}
          onChange={onChange}
        ></input>
        <div className="txt">이메일</div>
        <input
          className="input"
          name="email"
          value={email}
          onChange={onChange}
        ></input>
        <div className="txt">생년월일</div>
        <input
          className="input"
          name="birth"
          value={birth}
          onChange={onChange}
        ></input>
        <div className="txt">성별</div>
        <input
          className="input"
          name="gender"
          value={gender}
          onChange={onChange}
        ></input>
        <button type="submit" className="joinBtn">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
