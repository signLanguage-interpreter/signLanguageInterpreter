import "./RegiBoard.scss";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const RegiBoard = ({ match }) => {
  const { registerId } = match.params;

  // state
  const [regi, setRegi] = useState({
    // id: "",
    classification: "",
    subject: "",
    content: "",
    status: "",
    receptionDate: "",
  });
  const { id, classification, subject, content, status, receptionDate } = regi;

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/user/register/${registerId}`
        );
        setRegi({
          ...regi,
          id: res.data.id,
          classification: res.data.classification,
          subject: res.data.subject,
          content: res.data.content,
          status: res.data.status,
          receptionDate: res.data.receptionDate,
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  });
  return (
    <div className="regi_board_wrapper">
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/user/main")}
          ></img>
        </div>
      </header>
      <div className="regi_board">
        <section>
          <div className="subject_place">1{subject}</div>
          <div className="date_place">2{receptionDate}</div>
          <div className="class_place">3{classification}</div>
          <div className="status_place">4{status}</div>
          <div className="content_place">5{content}</div>
        </section>
      </div>
    </div>
  );
};

export default RegiBoard;
