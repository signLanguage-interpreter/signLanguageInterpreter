import "./Manager.scss";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import MyContent from "../MyContent/MyContent";
import axios from "axios";
import ListComponent from "../ListComponent/ListComponent";
import qs from "qs";

const dummy_list = [
  {
    id: 1,
    receptionId: "123123",
    receptionDate: "2021-09-17T04:00:00",
    status: "HOLD",
    subject: "통역을 의뢰합니다.",
    classification: "Education",
  },
  {
    id: 2,
    receptionId: "123123",
    receptionDate: "2021-09-17T04:00:00",
    status: "HOLD",
    subject: "통역을 의뢰합니다2.",
    classification: "Education",
  },
  {
    id: 3,
    receptionId: "123123",
    receptionDate: "2021-09-17T04:00:00",
    status: "HOLD",
    subject: "통역을 의뢰합니다3.",
    classification: "Education",
  },
];

const Manager = ({ location, history }) => {
  // query
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { hold, ready, end } = query;
  // state
  const [user, setUser] = useState({
    id: "",
    userNickName: "",
    cellPhone: "",
    eMail: "",
  });
  const [holdList, setHoldList] = useState([]);
  const [readyList, setReadyList] = useState([]);
  const [endList, setEndList] = useState([]);
  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/manager/main?hold=${hold}&ready=${ready}&end=${end}`,
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
        console.log(res);
        const [user, holdList, readyList, endList] = res.data;
        setUser({
          ...user,
          id: res.data.id,
          userNickName: res.data.userNickName,
          cellPhone: res.data.cellPhone,
          eMail: res.data.eMail,
        });
        setHoldList({
          ...holdList,
          holdList,
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
        <article className="all_list">
          <ListComponent
            title="모든 신청 리스트"
            lists={dummy_list}
          ></ListComponent>
        </article>
        <article className="my_list">
          <ListComponent
            title="내 신청 리스트"
            lists={dummy_list}
          ></ListComponent>
        </article>
        <article className="my_con">
          <MyContent user={user}></MyContent>
        </article>
        <article className="comp_list">
          <ListComponent
            title="완료한 신청 리스트"
            lists={dummy_list}
          ></ListComponent>
        </article>
      </main>
    </div>
  );
};

export default Manager;
