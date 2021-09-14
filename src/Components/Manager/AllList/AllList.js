import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./AllList.scss";

const AllList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/manager?status=HOLD&page=1",
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
        setLists(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  });

  return (
    <div className="all_list_wrapper">
      <h4>모든 신청 리스트</h4>
      <div className="allList">
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
        <span>접수</span>
      </div>
      <div className="pagination">pagination</div>
    </div>
  );
};

export default AllList;
