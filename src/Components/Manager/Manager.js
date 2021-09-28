import "./Manager.scss";
import { Fragment, useEffect, useState } from "react";
import MyContent from "../MyContent/MyContent";
import axios from "axios";
import qs from "qs";
import { Link, NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";

const dummy_list = [
  {
    id: 1,
    receptionId: "123123",
    receptionDate: "2021-09-17T04:00:00",
    status: "HOLD",
    subject: "통역을 의뢰합니다.",
    classification: "Education",
    name: "min",
  },
  {
    id: 2,
    receptionId: "123123",
    receptionDate: "2021-09-17T04:00:00",
    status: "HOLD",
    subject: "통역을 의뢰합니다2.",
    classification: "Education",
    name: "kim",
  },
  {
    id: 3,
    receptionId: "123123",
    receptionDate: "2021-09-17T04:00:00",
    status: "HOLD",
    subject: "통역을 의뢰합니다3.",
    classification: "Education",
    name: "park",
  },
];

const Manager = ({ location, history }) => {
  // query
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { status, page } = query;
  // state
  const [user, setUser] = useState([]);
  const [list, setList] = useState([]);

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/manager/main?status=${status}&page=${page}`,
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
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, [status, page]);

  // activeStyle
  const activeStyle = {
    background: "var(--main-color)",
    color: "var(--white-color)",
  };

  // event

  return (
    <div className="manager_wrapper">
      <Header first="다른 통역사 보기" second="신청하러 가기"></Header>
      <main>
        <article className="lists">
          <div className="lists_nav">
            <NavLink
              to="?status=hold&page=1"
              activeStyle={activeStyle}
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                const query = qs.parse(location.search, {
                  ignoreQueryPrefix: true,
                });
                return query.status === "hold" ? true : false;
              }}
            >
              Hold
            </NavLink>
            <NavLink
              to="?status=ready&page=1"
              activeStyle={activeStyle}
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                const query = qs.parse(location.search, {
                  ignoreQueryPrefix: true,
                });
                return query.status === "ready" ? true : false;
              }}
            >
              Ready
            </NavLink>
            <NavLink
              to="?status=end&page=1"
              activeStyle={activeStyle}
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                const query = qs.parse(location.search, {
                  ignoreQueryPrefix: true,
                });
                return query.status === "end" ? true : false;
              }}
            >
              End
            </NavLink>
          </div>
          <div className="lists_table">
            <div className="table_head">
              <span>분류</span>
              <span>제목</span>
              <span>예약날짜</span>
              <span>예약자</span>
            </div>
            <div className="table_body">
              {dummy_list.map((cur) => {
                return (
                  <Fragment key={cur.id}>
                    <span>{cur.classification}</span>
                    <Link
                      className="link"
                      to={`/user/regist/${cur.id}/${cur.receptionId}`}
                    >
                      {cur.subject}
                    </Link>
                    <span>{cur.receptionDate.substring(2, 10)}</span>
                    <span>{cur.name}</span>
                  </Fragment>
                );
              })}
              {list &&
                list.map((cur) => {
                  return (
                    <Fragment key={cur.id}>
                      <span>{cur.classification}</span>
                      <Link
                        className="link"
                        to={`/user/regist/${cur.id}/${cur.receptionId}`}
                      >
                        {cur.subject}
                      </Link>
                      <span>{cur.receptionDate.substring(2, 10)}</span>
                      <span>{cur.name}</span>
                    </Fragment>
                  );
                })}
            </div>
          </div>
          <Pagination></Pagination>
        </article>
        <article className="my_con">
          <MyContent user={user}></MyContent>
        </article>
      </main>
    </div>
  );
};

export default Manager;
