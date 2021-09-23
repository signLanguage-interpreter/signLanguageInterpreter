import "./AllRegi.scss";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const AllRegi = ({ history }) => {
  const [lists, setLists] = useState([]);
  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
        setLists(res.data.lists);
        console.log(res);
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
          <div className="list_nav">
            <span className="fb">제목</span>
            <span className="fb">신청자</span>
            <span className="fb">날짜</span>
            <span className="fb">상태</span>
          </div>
          <div className="list">
            {lists === null
              ? null
              : lists.map((cur) => {
                  return (
                    <div key={cur.id}>
                      <span
                        onClick={() =>
                          history.push(
                            `/user/regist/${cur.id}/${cur.receptionId}`
                          )
                        }
                        className="subject"
                      >
                        {cur.subject}
                      </span>
                      <span>{cur.user}</span>
                      <span>
                        {cur.receptionDate
                          .replaceAll("-", ".")
                          .substring(2, 10)}
                      </span>
                      <span>{cur.status}</span>
                    </div>
                  );
                })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllRegi;
