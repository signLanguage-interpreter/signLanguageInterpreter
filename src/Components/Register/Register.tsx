// import axios from "axios";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from "../Header/Header";
import CcWrapper from "./CcWrapper/CcWrapper";
import DtWrapper from "./DtWrapper/DtWrapper";
import InterWrapper from "./InterWrapper/InterWrapper";
import NpWrapper from "./NpWrapper/NpWrapper";
import "./Register.scss";

interface Regi {
  classification: string;
  subject: string;
  content: string;
  interpreter: string;
  receptionDate: string;
}

const Register: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  // state
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    id: "",
    userNickName: "",
    cellPhone: "",
  });
  const { id, userNickName, cellPhone } = user;
  const [regi, setRegi] = useState<Regi>({
    classification: "",
    subject: "",
    content: "",
    interpreter: "",
    receptionDate: "",
  });
  const { classification, subject, content, interpreter, receptionDate } = regi;

  const [cnt, setCnt] = useState(1);

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/user/reception");
        console.log(res);
        setUser({
          ...user,
          id: res.data.id,
          userNickName: res.data.userNickName,
          cellPhone: res.data.cellPhone,
        });
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, [user]);

  if (loading) {
    return <div>loading</div>;
  }

  // ref
  const np = useRef<HTMLDivElement>(null);
  const cc = useRef<HTMLDivElement>(null);
  const inter = useRef<HTMLDivElement>(null);
  const dt = useRef<HTMLDivElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);

  // event
  const onNextBtnClick = () => {
    if (cnt === 1) {
      np.current!.style.display = "none";
      cc.current!.style.display = "block";
      setCnt(2);
    } else if (cnt === 2) {
      cc.current!.style.display = "none";
      inter.current!.style.display = "block";
      setCnt(3);
    } else if (cnt === 3) {
      inter.current!.style.display = "none";
      dt.current!.style.display = "block";
      nextBtn.current!.style.display = "none";
      submitBtn.current!.style.display = "block";
      setCnt(4);
    }
  };

  const onPrevBtnClick = () => {
    if (cnt === 1) {
      history.push("/");
    } else if (cnt === 2) {
      np.current!.style.display = "block";
      cc.current!.style.display = "none";
      setCnt(1);
    } else if (cnt === 3) {
      cc.current!.style.display = "block";
      inter.current!.style.display = "none";
      setCnt(2);
    } else if (cnt === 4) {
      inter.current!.style.display = "block";
      dt.current!.style.display = "none";
      nextBtn.current!.style.display = "block";
      submitBtn.current!.style.display = "none";
      setCnt(3);
    }
  };

  const send = async () => {
    try {
      await axios.post("http://localhost:5000/user/reception", {
        classification,
        subject,
        content,
        interpreter,
        receptionDate,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(regi);
    send();
    setCnt(1);
    history.push("/");
  };
  return (
    <form className="register_wrapper" onSubmit={onSubmit}>
      <Header></Header>
      <div className="signUp">
        <NpWrapper
          id={id}
          userNickName={userNickName}
          cellPhone={cellPhone}
          np={np}
        ></NpWrapper>
        <CcWrapper regi={regi} setRegi={setRegi} cc={cc}></CcWrapper>
        <InterWrapper
          regi={regi}
          setRegi={setRegi}
          inter={inter}
        ></InterWrapper>
        <DtWrapper regi={regi} setRegi={setRegi} dt={dt}></DtWrapper>
        <div className="btn_wrapper">
          <button
            type="button"
            className="prevBtn btn"
            onClick={onPrevBtnClick}
          >
            이전
          </button>
          <button
            type="button"
            className="nextBtn btn"
            ref={nextBtn}
            onClick={onNextBtnClick}
          >
            다음
          </button>
          <button type="submit" className="submitBtn btn" ref={submitBtn}>
            신청
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
