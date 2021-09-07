import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../../App";
import "./Login.scss";

const Login = ({ history }) => {
  // state
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;

  // ref
  const pw_text = useRef(null);

  // event
  const onEyeClick = () => {
    if (pw_text.current.type === "password") {
      pw_text.current.type = "text";
    } else {
      pw_text.current.type = "password";
    }
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(`${[e.currentTarget.name]}: ${e.currentTarget.value}`);
  };

  const login_action = (authorization, logged) => {
    return {
      type: "LOGIN",
      payload: {
        authorization: authorization,
        logged: logged,
      },
    };
  };

  // regex

  const send = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      // redux 사용
      if (res.headers.authorization) {
        store.dispatch(login_action(res.headers.authorization, true));
        if (res.data.role === "user") {
          history.push("/user/main");
        } else if (res.data.role === "manager") {
        }
      } else {
        alert("아이디나 비밀번호가 틀립니다.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // axios
    send();
  };

  return (
    <div className="login_wrapper">
      <div className="login_img">SLT</div>
      <div className="form_wrapper">
        <form className="login" onSubmit={onSubmit}>
          <div className="id_pw_wrapper">
            <div className="id_wrapper">
              <i className="far fa-user icon"></i>
              <input
                name="username"
                placeholder="아이디"
                className="id_input"
                autoComplete="off"
                defaultValue={username}
                onChange={onChange}
              ></input>
            </div>
            <div className="pw_wrapper">
              <i className="fas fa-unlock-alt icon"></i>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                className="pw_input"
                autoComplete="off"
                defaultValue={password}
                onChange={onChange}
                ref={pw_text}
              ></input>
              <i className="fas fa-eye" onClick={onEyeClick}></i>
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
    </div>
  );
};

export default Login;
