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
        setUser(res.data.user);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  });

  return (
    <div className="manager_wrapper">
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/manager/main")}
          ></img>
          <span onClick={() => history.push("/user/main")}>신청하러 가기</span>
        </div>
      </header>
      <main>
        <section className="all_list">
          <AllList></AllList>
        </section>
        <section className="my_list">
          <MyList></MyList>
        </section>
        <section className="user">
          <MyContent user={user}></MyContent>
        </section>
        <section className="complete_list">
          <CompleteList></CompleteList>
        </section>
      </main>
    </div>
  );
};

export default Manager;
