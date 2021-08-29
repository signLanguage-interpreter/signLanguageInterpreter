import React, { useRef } from "react";
import Interpreter from "../Interpreter/Interpreter";
import "./Register.scss";

const Register = () => {
  // state

  // ref
  const npc_wrapper = useRef<HTMLDivElement>(null);
  const inter_wrapper = useRef<HTMLDivElement>(null);
  const dt_wrapper = useRef<HTMLDivElement>(null);

  // event

  return (
    <form className="register_wrapper">
      <header className="register_header">SLT 수어 통역 신청</header>
      <div className="name_phone_content_wrapper" ref={npc_wrapper}>
        <div className="name_wrapper">
          <label htmlFor="name">신청인</label>
          <div>
            <input id="name" className="name input"></input>
          </div>
        </div>
        <div className="phone_wrapper">
          <label htmlFor="phone">핸드폰 번호</label>
          <div>
            <input
              id="phone"
              className="phone input"
              placeholder="예) 010"
            ></input>
            -<input className="phone input" placeholder="예) 1234"></input>-
            <input className="phone input" placeholder="예) 1234"></input>
          </div>
          <div className="content_wrapper">
            <label htmlFor="content">내용</label>
            <textarea rows={10} id="content"></textarea>
          </div>
        </div>
      </div>
      <div className="interpreters_wrapper" ref={inter_wrapper}>
        <div className="interpreter">
          <input type="radio" id="1" value="1" name="interpreter_list"></input>
          <label htmlFor="1">
            <Interpreter></Interpreter>
          </label>
        </div>
        <div className="interpreter">
          <input type="radio" id="2" value="2" name="interpreter_list"></input>
          <label htmlFor="2">
            <Interpreter></Interpreter>
          </label>
        </div>
      </div>
      <div className="date_time_wrapper" ref={dt_wrapper}>
        <div className="date"></div>
        <div className="time"></div>
      </div>
      <button type="button" className="next_btn btn">
        다음
      </button>
      <button type="submit" className="submit_btn btn">
        신청
      </button>
    </form>
  );
};

export default Register;
