import React, { useRef, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "./Login.scss";

const Login: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const pw_text = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = user;

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    // axios
    history.push("/register");
  };
  return (
    <div className="login_wrapper">
      <header>SLT</header>
      <form className="login" onSubmit={onSubmit}>
        <div className="id_pw_wrapper">
          <div className="id_wrapper">
            <i className="far fa-user icon"></i>
            <input
              name="id"
              placeholder="아이디"
              className="input"
              value={id}
              onChange={onChange}
              autoComplete="off"
            ></input>
          </div>
          <div className="pw_wrapper">
            <i className="fas fa-unlock-alt icon"></i>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호"
              className="input"
              value={pw}
              onChange={onChange}
              autoComplete="off"
              ref={pw_text}
            ></input>
            <i className="fas fa-eye icon_eye" onClick={onEyeClick}></i>
          </div>
        </div>
        <button type="submit" className="loginBtn">
          로그인
        </button>
      </form>
      <div className="find_join_wrapper">
        <Link to="/find_pw" className="link">
          비밀번호 찾기
        </Link>
        <Link to="/find_id" className="link">
          아이디 찾기
        </Link>
        <Link to="/join" className="link">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
