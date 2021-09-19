import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import qs from "qs";
import "./MyList.scss";

const MyList = ({ history, location }) => {
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
          `http://localhost:5000/manager?status=READY&page=${cur_page}`,
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
    const res = [];
    for (let i = page.startPage; i <= page.endPage; i++) {
      res.push(<span className="page">{i}</span>);
    }
  };

  const onBtnClick = () => {};
  return (
    <div className="my_list_wrapper">
      <h4>자신에게 온 신청 리스트</h4>
      <div className="myList">
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
        <span>접수</span>
        {lists === null
          ? null
          : lists.map((cur) => {
              return (
                <Fragment key={cur.id}>
                  <span>{cur.subject}</span>
                  <span
                    onClick={() =>
                      history.push(`/user/regist/${cur.id}/${cur.receptionId}`)
                    }
                  >
                    {cur.receptionDate}
                  </span>
                  <span>{cur.status}</span>
                  <button onClick={onBtnClick}>접수</button>
                </Fragment>
              );
            })}
      </div>
      <div className="pagination">{pagination()}</div>
    </div>
  );
};

export default MyList;
