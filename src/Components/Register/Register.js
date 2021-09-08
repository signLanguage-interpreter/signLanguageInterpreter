// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";

import CcWrapper from "./CcWrapper/CcWrapper";
import DtWrapper from "./DtWrapper/DtWrapper";
import NpWrapper from "./NpWrapper/NpWrapper";
import "./Register.scss";

const Register = ({ id, userNickName, cellPhone }) => {
  // state
  const [regi, setRegi] = useState({
    classification: "",
    subject: "",
    content: "",
    receptionDate: "",
  });
  const { classification, subject, content, receptionDate } = regi;

  const send = async () => {
    try {
      await axios.post(
        "http://localhost:5000/user/reception",
        {
          classification,
          subject,
          content,
          receptionDate,
        },
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
      setRegi({
        ...regi,
        classification: "",
        subject: "",
        content: "",
        receptionDate: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = (e) => {
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
