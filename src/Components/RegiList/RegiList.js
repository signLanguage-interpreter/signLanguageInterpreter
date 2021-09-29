import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./RegiList.scss";

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

const RegiList = ({ regi_list, id }) => {
  const regi_bool = regi_list === null ? false : true;
  let regi_res;
  if (regi_bool) {
    regi_res = regi_list.map((cur, idx) => {
      return (
        <Fragment key={idx}>
          <span>{idx}</span>
          <Link to={`/user/regist/${cur.id}/${cur.receptionId}`}>
            {cur.subject}
          </Link>
          <span>{cur.receptionDate.substring(2, 10).replaceAll("-", ".")}</span>
          <span>{cur.status}</span>
        </Fragment>
      );
    });
  }

  return (
    <div className="regi_lsit_wrapper">
      <h4>자신이 신청한 리스트</h4>
      <div className="regi_list">
        <span>#</span>
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
        {regi_res}
        {dummy_list.map((cur, idx) => {
          return (
            <Fragment key={idx}>
              <span>{idx}</span>
              <Link to={`/user/regist/${cur.id}/${cur.receptionId}`}>
                {cur.subject}
              </Link>
              <span>
                {cur.receptionDate.substring(2, 10).replaceAll("-", ".")}
              </span>
              <span>{cur.status}</span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RegiList;
