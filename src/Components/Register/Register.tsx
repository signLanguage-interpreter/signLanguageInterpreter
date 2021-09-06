// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";

import CcWrapper from "./CcWrapper/CcWrapper";
import DtWrapper from "./DtWrapper/DtWrapper";
import NpWrapper from "./NpWrapper/NpWrapper";
import "./Register.scss";

interface Regi {
  classification: string;
  subject: string;
  content: string;
  interpreter: string;
  receptionDate: string;
}

const Register = () => {
  // state
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

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/reception", {
          headers: {
            Authorization: sessionStorage
              .getItem("authorization")
              ?.substring(
                1,
                sessionStorage.getItem("authorization")!.length - 1
              ),
          },
        });
        console.log(res);
        setUser({
          ...user,
          id: res.data.id,
          userNickName: res.data.userNickName,
          cellPhone: res.data.cellPhone,
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, [user]);

  const send = async () => {
    try {
      await axios.post(
        "http://localhost:5000/user/reception",
        {
          classification,
          subject,
          content,
          interpreter,
          receptionDate,
        },
        {
          headers: {
            Authorization: sessionStorage
              .getItem("authorization")
              ?.substring(
                1,
                sessionStorage.getItem("authorization")!.length - 1
              ),
          },
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(regi);
    send();
  };
  return (
    <form className="register_wrapper" onSubmit={onSubmit}>
      <h2>신청</h2>
      <div className="signUp">
        <NpWrapper
          id={id}
          userNickName={userNickName}
          cellPhone={cellPhone}
        ></NpWrapper>
        <CcWrapper regi={regi} setRegi={setRegi}></CcWrapper>
        <DtWrapper regi={regi} setRegi={setRegi}></DtWrapper>
      </div>
      <div className="submitBtn">
        <button type="submit">신청</button>
      </div>
    </form>
  );
};

export default Register;
