import { withRouter } from "react-router";
import "./RegiList.scss";

const RegiList = ({ regi_list, history }) => {
  const regi_bool = regi_list === null ? false : true;
  let regi_res;
  if (regi_bool) {
    regi_res = regi_list.map((cur, idx) => {
      const cur_status = cur.status;
      let cur_status_icon;
      switch (cur_status) {
        case "HOLD":
          cur_status_icon = "H";
          break;
        case "READY":
          cur_status_icon = "R";
          break;
        case "END":
          cur_status_icon = "E";
          break;
        default:
          console.log("error");
      }
      return (
        <>
          <span>{idx}</span>
          <span
            className="regi_subject"
            onClick={() => history.push(`/user/regist/pk/${cur.receptionId}`)}
          >
            {cur.subject}
          </span>
          <span>{cur.receptionDate}</span>
          <span>{cur_status_icon}</span>
        </>
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

export default withRouter(RegiList);
