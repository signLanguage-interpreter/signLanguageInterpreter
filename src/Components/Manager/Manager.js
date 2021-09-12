import "./Manager.scss";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import MyContent from "../MyContent/MyContent";
import axios from "axios";
import AllList from "./AllList/AllList";
import MyList from "./MyList/MyList";
import CompleteList from "./CompleteList/CompleteList";

const Manager = ({ history }) => {
  // state
  const [user, setUser] = useState({
    id: "",
    userNickName: "",
    cellPhone: "",
    eMail: "",
  });

  const [registers, setRegisters] = useState([]);

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
        setUser(res.data.user);
        setRegisters(res.data.regi_list);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []);

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
            <span>다른 통역사 접수 보러가기</span>
            <span onClick={() => history.push("/user/main")}>
              신청하러 가기
            </span>
          </div>
        </div>
      </header>
      <main>
        <section className="all_list">
          <AllList registers={registers} id={user.id}></AllList>
        </section>
        <section className="my_list">
          <MyList registers={registers} id={user.id}></MyList>
        </section>
        <section className="user">
          <MyContent user={user}></MyContent>
        </section>
        <section className="complete_list">
          <CompleteList registers={registers} id={user.id}></CompleteList>
        </section>
      </main>
    </div>
  );
};

export default Manager;
