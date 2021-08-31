import axios from "axios";
import React, { useRef, useState } from "react";
import "./Join.scss";

const Join = () => {
  // ref
  const pw_text = useRef<HTMLInputElement>(null);

  // state
  const [user, setUser] = useState({
    username: "",
    password: "",
    eMail: "",
    userNickName: "",
    cellphone: "",
    birth: "",
    gender: "",
  });
  const { userNickName, username, password, cellphone, eMail, birth, gender } =
    user;

  // event
  const onEyeClick = () => {
    if (pw_text.current!.type === "password") {
      pw_text.current!.type = "text";
    } else {
      pw_text.current!.type = "password";
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(`${[e.currentTarget.name]}: ${e.currentTarget.value}`);
  };

  const onSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(`${[e.currentTarget.name]}: ${e.currentTarget.value}`);
  };

  const send = async () => {
    try {
      await axios.post("http://localhost:5000/join", {
        ...user,
        gender: Boolean(gender),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send();
    console.log(user);
  };

  return (
    <div className="join_wrapper">
      <header>SLT</header>
      <form className="join" onSubmit={onSubmit}>
        <div className="join_detail">
          <div className="name_wrapper">
            <i className="fas fa-signature icon"></i>
            <input
              className="input"
              name="userNickName"
              value={userNickName}
              onChange={onChange}
              autoComplete="off"
              placeholder="이름"
            ></input>
          </div>
          <div className="id_wrapper">
            <i className="fas fa-portrait icon"></i>
            <input
              className="input"
              name="username"
              value={username}
              onChange={onChange}
              autoComplete="off"
              placeholder="아이디"
            ></input>
          </div>
          <div className="pw_wrapper">
            <i className="fas fa-key icon"></i>
            <input
              type="password"
              className="input"
              name="password"
              value={password}
              onChange={onChange}
              ref={pw_text}
              autoComplete="off"
              placeholder="비밀번호"
            ></input>
            <i className="fas fa-eye icon_eye" onClick={onEyeClick}></i>
          </div>
          <div className="phone_wrapper">
            <i className="fas fa-phone icon"></i>
            <input
              className="input"
              name="cellphone"
              value={cellphone}
              onChange={onChange}
              autoComplete="off"
              placeholder="전화번호 예)01012345678"
            ></input>
          </div>
          <div className="email_wrapper">
            <i className="fas fa-at icon"></i>
            <input
              className="input"
              name="eMail"
              value={eMail}
              onChange={onChange}
              autoComplete="off"
              placeholder="이메일 예) 123123@abc.com"
            ></input>
          </div>
          <div className="birth_wrapper">
            <i className="fas fa-birthday-cake icon"></i>
            <input
              className="input"
              name="birth"
              value={birth}
              onChange={onChange}
              autoComplete="off"
              placeholder="생일 예) 000102"
            ></input>
          </div>
          <div className="gender_wrapper">
            <i className="fas fa-venus-mars icon"></i>
            <select
              name="gender"
              defaultValue={gender}
              onChange={onSelectChange}
              className="input"
            >
              <option value="true">남성</option>
              <option value="false">여성</option>
            </select>
          </div>
        </div>
        <button type="submit" className="joinBtn">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
