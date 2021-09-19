import "./AllRegi.scss";
import logo from "../img/logo.png";
import { useEffect } from "react";
import axios from "axios";

const AllRegi = ({ history }) => {
  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/manager/main")}
          ></img>
          <div>
            <span onClick={() => window.location.replace("/manager/main")}>
              통역사 페이지 가기
            </span>
            <span onClick={() => history.push("/user/main")}>
              신청하러 가기
            </span>
          </div>
        </div>
      </header>
      <main>
        <section>
          <span className="fb">제목</span>
          <span className="fb">신청자</span>
          <span className="fb">날짜</span>
          <span className="fb">상태</span>
        </section>
      </main>
    </div>
  );
};

export default AllRegi;
