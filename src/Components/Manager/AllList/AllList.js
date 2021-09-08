import "./AllList.scss";

const AllList = () => {
  return (
    <div className="all_list_wrapper">
      <h4>모든 신청 리스트</h4>
      <div className="allList">
        <span>#</span>
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
      </div>
    </div>
  );
};

export default AllList;
