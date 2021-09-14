import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./CompleteList.scss";

const CompleteList = ({ id, history }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/manager?status=END&page=1",
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
        setLists(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  });
  return (
    <div className="com_list_wrapper">
      <h4>완료된 신청 리스트</h4>
      <div className="comList">
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
        <span>접수</span>
      </div>
      <div className="pagination">pagination</div>
    </div>
  );
};

export default CompleteList;
