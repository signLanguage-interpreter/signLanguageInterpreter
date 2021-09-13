import axios from "axios";
import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Join.scss";

const Join: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  // ref
  const pw_text = useRef<HTMLInputElement>(null);

  // state
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    userNickName: "",
    cellPhone: "",
    birth: "",
    gender: "",
  });
  const { userNickName, username, password, cellPhone, email, birth, gender } =
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
  };

  const onSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const send = async () => {
    try {
      await axios.post("http://localhost:5000/join", {
        ...user,
        gender: Boolean(gender),
      });
      history.push("/login");
    } catch (e) {
      console.error(e);
    }
  };

  // regex(전화번호, 이메일, 생일)
  // 전화번호 01000000000 숫자11개 + 앞에 세자리는 01X
  const cellPhone_regex = /01\d{9}/;
  const birth_regex = /\d{4}-\d{1,2}-\d{1,2}/;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cellPhone_regex.test(cellPhone) && birth_regex.test(birth)) {
      console.log("success regex");
      send();
    } else {
      alert("형식이 다릅니다.");
    }
  };

  return (
    <div className="join_wrapper">
      <div className="join_img">SLT</div>
      <div className="form_wrapper">
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
                required
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
                required
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
                required
              ></input>
              <i className="fas fa-eye icon_eye" onClick={onEyeClick}></i>
            </div>
            <div className="phone_wrapper">
              <i className="fas fa-phone icon"></i>
              <input
                className="input"
                name="cellPhone"
                value={cellPhone}
                onChange={onChange}
                autoComplete="off"
                placeholder="전화번호 예)01012345678"
                required
              ></input>
            </div>
            <div className="email_wrapper">
              <i className="fas fa-at icon"></i>
              <input
                className="input"
                name="email"
                value={email}
                onChange={onChange}
                autoComplete="off"
                placeholder="이메일 예) 123123@abc.com"
                required
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
                placeholder="생일 예) 0000-00-00"
                required
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
                <option value="default">-선택-</option>
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
    </div>
  );
};

export default Join;
