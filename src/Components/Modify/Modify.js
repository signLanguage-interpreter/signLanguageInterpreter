import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Modify.scss";

const Modify = () => {
  // state
  const [manager, setManager] = useState({
    id: "",
    userNickName: "",
    username: "",
    password: "",
    cellPhone: "",
    eMail: "",
  });
  const { id, userNickName, username, password, cellPhone, eMail } = manager;

  // useEffect (Mount)
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/manager/modifyInfo");
        setManager({
          ...manager,
          id: res.data.id,
          userNickName: res.data.userNickName,
          username: res.data.username,
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  });

  // post: manager/modifyInfo/{id}
  const onSubmit = (e) => {
    e.preventDefault();
    const send = async () => {
      try {
        axios.post(
          `http://localhost:5000/modifyInfo/${id}`,
          { manager },
          {
            headers: {
              Authorization: sessionStorage
                .getItem("authorization")
                ?.substring(
                  1,
                  sessionStorage.getItem("authorization").length - 1
                ),
            },
          }
        );
      } catch (e) {
        console.error(e);
      }
    };
    send();
  };

  const onChange = (e) => {
    setManager({
      ...manager,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modify_wrapper">
      <Header></Header>
      <form className="modify" onSubmit={onSubmit}>
        <div className="modify_detail">
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
              autoComplete="off"
              placeholder="비밀번호"
            ></input>
            <i className="fas fa-eye icon_eye"></i>
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
              autoComplete="off"
              placeholder="생일 예) 0000-00-00"
              disabled
            ></input>
          </div>
          <div className="gender_wrapper">
            <i className="fas fa-venus-mars icon"></i>
            <select name="gender" className="input" disabled>
              <option value="default">-선택-</option>
              <option value="true">남성</option>
              <option value="false">여성</option>
            </select>
          </div>
        </div>
        <button className="modifyBtn">수정</button>
      </form>
    </div>
  );
};

export default Modify;
