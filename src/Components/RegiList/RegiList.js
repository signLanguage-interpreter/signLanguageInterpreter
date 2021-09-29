import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./RegiList.scss";

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
      </div>
    </div>
  );
};

export default RegiList;
