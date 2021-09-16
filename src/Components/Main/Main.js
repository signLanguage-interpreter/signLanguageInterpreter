import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../img/logo.png";
import Register from "../Register/Register";
import MyContent from "../MyContent/MyContent";
import RegiList from "../RegiList/RegiList";
import "./Main.scss";

const Main = ({ history }) => {
  const [user, setUser] = useState({
    id: "",
    userNickName: "",
    username: "",
    cellPhone: "",
    email: "",
  });
  const [regi_list, setRegi_list] = useState([]);

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/main", {
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
        setRegi_list(res.data.regi_list);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []);

  return (
    <div className="main">
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/user/main")}
          ></img>
        </div>
      </header>
      <main>
        <section className="regi">
          <Register user={user}></Register>
        </section>
        <section className="user">
          <MyContent user={user}></MyContent>
        </section>
        <section className="regi_list">
          <RegiList regi_list={regi_list} id={user.id}></RegiList>
        </section>
      </main>
    </div>
  );
};

export default Main;
