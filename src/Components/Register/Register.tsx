import React from "react";
import "./Register.scss";

const Register = () => {
  const name: string = sessionStorage.getItem("user_id")!;
  const phone: string[] = ["010", "5130", "1736"];
  const [first, second, last] = phone;
  return (
    <div className="register_wrapper">
      <header className="register_header">SLT 수어 통역 신청</header>
      <div className="name_phone_wrapper">
        <div className="name_wrapper">
          <label htmlFor="name">신청인</label>
          <div>
            <input id="name" className="name input" defaultValue={name}></input>
          </div>
        </div>
        <div className="phone_wrapper">
          <label htmlFor="phone">핸드폰 번호</label>
          <div>
            <input
              id="phone"
              className="phone input"
              placeholder="예) 010"
              defaultValue={first}
            ></input>
            -
            <input
              className="phone input"
              placeholder="예) 1234"
              defaultValue={second}
            ></input>
            -
            <input
              className="phone input"
              placeholder="예) 1234"
              defaultValue={last}
            ></input>
          </div>
        </div>
      </div>
      <button className="next_btn">다음</button>
    </div>
  );
};

export default Register;
