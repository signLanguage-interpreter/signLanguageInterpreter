import "./CompleteList.scss";

const CompleteList = () => {
  return (
    <div className="com_list_wrapper">
      <h4>완료된 신청 리스트</h4>
      <div className="comList">
        <span>#</span>
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
      </div>
    </div>
  );
};

export default CompleteList;
