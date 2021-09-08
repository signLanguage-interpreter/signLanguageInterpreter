import "./MyList.scss";

const MyList = () => {
  return (
    <div className="my_list_wrapper">
      <h4>자신에게 온 신청 리스트</h4>
      <div className="myList">
        <span>#</span>
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
      </div>
    </div>
  );
};

export default MyList;
