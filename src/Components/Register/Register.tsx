// import axios from "axios";
import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Interpreter from "../Interpreter/Interpreter";
import "./Register.scss";

// import example1 from "../img/example1.jpg";
// import example2 from "../img/example2.jpg";

interface Register {
  username: string;
  cellphone: string;
  content_class: string;
  subject: string;
  content: string;
  date_time: string;
}

const Register: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  // state
  const [cnt, setCnt] = useState(1);
  // const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState<Register>({
    username: "",
    cellphone: "",
    content_class: "",
    subject: "",
    content: "",
    date_time: "",
  });
  const { username, cellphone, content_class, subject, content, date_time } =
    register;

  // ref
  const np_wrapper = useRef<HTMLDivElement>(null);
  const cc_wrapper = useRef<HTMLDivElement>(null);
  const inter_wrapper = useRef<HTMLDivElement>(null);
  const dt_wrapper = useRef<HTMLDivElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);

  // useEffect
  /* 
  useEffect(() => {
    const config = {
      headers: {
        Authorization: sessionStorage.getItem("jwt_token"),
      },
    };
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/register", config);
        setRegister({
          ...register,
          username: res.data.username,
          cellphone: res.data.cellphone,
        });
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetch();
  }, [register]);

  if (loading) {
    return;
  }
  */

  // event
  const onNextBtnClick = () => {
    if (cnt === 1) {
      np_wrapper.current!.style.display = "none";
      cc_wrapper.current!.style.display = "block";
      setCnt(2);
    } else if (cnt === 2) {
      cc_wrapper.current!.style.display = "none";
      inter_wrapper.current!.style.display = "block";
      setCnt(3);
    } else if (cnt === 3) {
      inter_wrapper.current!.style.display = "none";
      dt_wrapper.current!.style.display = "block";
      nextBtn.current!.style.display = "none";
      submitBtn.current!.style.display = "block";
    }

    console.log(cnt);
  };

  const onChange = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLSelectElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setRegister({
      ...register,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(`${[e.currentTarget.name]}: ${e.currentTarget.value}`);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCnt(1);
    console.log(register);
    history.push("/");
  };

  return (
    <form className="register_wrapper" onSubmit={onSubmit}>
      <header className="register_header">SLT 수어 통역 신청</header>
      <div className="name_phone_wrapper" ref={np_wrapper}>
        <div className="name_wrapper">
          <label htmlFor="name">신청인</label>
          <div>
            <input
              id="name"
              className="name input"
              autoComplete="off"
              defaultValue={username}
              readOnly
            ></input>
          </div>
        </div>
        <div className="phone_wrapper">
          <label htmlFor="phone">핸드폰 번호</label>
          <div>
            <input
              id="phone"
              className="phone input"
              placeholder="예) 010"
              defaultValue={cellphone.substring(0, 3)}
              readOnly
            ></input>
            -
            <input
              className="phone input"
              placeholder="예) 1234"
              defaultValue={cellphone.substring(3, 7)}
              readOnly
            ></input>
            -
            <input
              className="phone input"
              placeholder="예) 1234"
              defaultValue={cellphone.substring(7, 11)}
              readOnly
            ></input>
          </div>
        </div>
      </div>
      <div className="cc_wrapper" ref={cc_wrapper}>
        <div className="content_class">
          <label htmlFor="class" className="txt">
            분류
          </label>
          <select
            id="class"
            name="content_class"
            defaultValue={content_class}
            onChange={onChange}
          >
            <option value="default">-선택-</option>
            <option value="medical">의료</option>
            <option value="edu">교육</option>
          </select>
        </div>
        <div className="content_wrapper">
          <div>
            <label htmlFor="subject" className="txt">
              제목
            </label>
            <input
              id="subject"
              name="subject"
              value={subject}
              onChange={onChange}
            ></input>
          </div>
          <label htmlFor="content" className="txt">
            내용
          </label>
          <textarea
            rows={10}
            id="content"
            name="content"
            onChange={onChange}
            defaultValue={content}
          ></textarea>
        </div>
      </div>
      <div className="interpreters_wrapper" ref={inter_wrapper}>
        <div className="interpreter_list">
          <input
            type="radio"
            id="1"
            value="1"
            name="interpreter"
            onChange={onChange}
          ></input>
          <label htmlFor="1">
            <Interpreter></Interpreter>
          </label>
        </div>
        <div className="interpreter_list">
          <input
            type="radio"
            id="2"
            value="2"
            name="interpreter"
            onChange={onChange}
          ></input>
          <label htmlFor="2">
            <Interpreter></Interpreter>
          </label>
        </div>
      </div>
      <div className="date_time_wrapper" ref={dt_wrapper}>
        <div className="time">
          <input
            type="datetime-local"
            name="date_time"
            value={date_time}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <button
        type="button"
        className="next_btn btn"
        ref={nextBtn}
        onClick={onNextBtnClick}
      >
        다음
      </button>
      <button type="submit" className="submit_btn btn" ref={submitBtn}>
        신청
      </button>
    </form>
  );
};

export default Register;
