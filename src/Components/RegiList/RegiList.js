import "./RegiList.scss";

const RegiList = ({ regi_list }) => {
  return (
    <div className="regi_lsit_wrapper">
      <h4>자신이 신청한 리스트</h4>
      <div className="regi_list">
        <span>#</span>
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
        {regi_list.map((cur) => {
          <>
            <span>{cur.id}</span>
            <span>{cur.subject}</span>
            <span>{cur.receptionDate}</span>
            <span>{cur.status === "HOLD" ? "X" : "O"}</span>
          </>;
        })}
      </div>
    </div>
  );
};

export default RegiList;
