import "./Manager.scss";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import MyContent from "../MyContent/MyContent";
import axios from "axios";

const Manager = ({ history }) => {
  // state
  const [user, setUser] = useState({
    id: "",
    userNickName: "",
    cellPhone: "",
    eMail: "",
  });
  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/manager/main", {
          headers: {
            Authorization: sessionStorage
              .getItem("authorization")
              ?.substring(
                1,
                sessionStorage.getItem("authorization").length - 1
              ),
          },
        });
        console.log(res);
        setUser({
          ...user,
          id: res.data.id,
          userNickName: res.data.userNickName,
          cellPhone: res.data.cellPhone,
          eMail: res.data.eMail,
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="manager_wrapper">
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/manager/main")}
          ></img>
          <div>
            <span onClick={() => history.push("/manager/all_register")}>
              다른 통역사 접수 보러가기
            </span>
            <span onClick={() => history.push("/user/main")}>
              신청하러 가기
            </span>
          </div>
        </div>
      </header>
      <main>
        <section className="all_list">
          <iframe
            src="http://localhost:3000/manager/all_list?page=1"
            title="HOLD_list"
          />
        </section>
        <section className="my_list">
          <iframe
            src="http://localhost:3000/manager/my_list?page=1"
            title="my_list"
          />
        </section>
        <section className="user">
          <MyContent user={user}></MyContent>
        </section>
        <section className="complete_list">
          <iframe
            src="http://localhost:3000/manager/complete_list?page=1"
            title="complete_list"
          />
        </section>
      </main>
    </div>
  );
};

export default Manager;
