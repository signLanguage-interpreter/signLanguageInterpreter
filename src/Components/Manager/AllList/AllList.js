import axios from "axios";
import { useEffect, useState } from "react";
import qs from "qs";
import "./AllList.scss";

const asds = [
  {
    id: 1,
    subject: "aaa",
    status: "HOLD",
    receptionId: "123",
    receptionDate: "123",
  },
  {
    id: 2,
    subject: "aaa",
    status: "HOLD",
    receptionId: "456",
    receptionDate: "456",
  },
  {
    id: 3,
    subject: "aaa",
    status: "HOLD",
    receptionId: "567",
    receptionDate: "567",
  },
  {
    id: 4,
    subject: "aaa",
    status: "HOLD",
    receptionId: "891",
    receptionDate: "891",
  },
];

const AllList = ({ history, location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const cur_page = query.page;

  const [page, setPage] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/manager?status=HOLD&page=${cur_page}`,
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
        setPage(res.data.paging);
        setLists(res.data.list);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // conditional rendering
  const pagination = () => {
    if (page === undefined) {
      return null;
    } else {
      const res = [];
      for (let i = page.startPage; i <= page.endPage; i++) {
        res.push(<span className="page">{i}</span>);
      }
    }
  };

  const onBtnClick = () => {
    alert("접수되었습니다.");
  };
  return (
    <div className="all_list_wrapper">
      <h4>모든 신청 리스트</h4>
      <div className="allList">
        <div className="all_list_nav">
          <span>상태</span>
          <span>제목</span>
          <span>예약날짜</span>
          <span>접수</span>
        </div>
        <div className="all_list_detail">
          {lists === null
            ? null
            : lists.map((cur) => {
                return (
                  <div key={cur.id}>
                    <span>{cur.status}</span>
                    <span
                      onClick={() =>
                        history.push(
                          `/user/regist/${cur.id}/${cur.receptionId}`
                        )
                      }
                      className="subject"
                    >
                      {cur.subject}
                    </span>
                    <span>{cur.receptionDate}</span>
                    <button onClick={onBtnClick}>접수</button>
                  </div>
                );
              })}
          {asds.map((cur) => {
            return (
              <div key={cur.id}>
                <span>{cur.status}</span>
                <span
                  onClick={() =>
                    history.push(`/user/regist/${cur.id}/${cur.receptionId}`)
                  }
                  className="subject"
                >
                  {cur.subject}
                </span>
                <span>{cur.receptionDate}</span>
                <button onClick={onBtnClick}>접수</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination">{pagination()}</div>
    </div>
  );
};

export default AllList;
