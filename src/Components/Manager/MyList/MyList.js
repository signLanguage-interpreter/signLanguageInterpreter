import axios from "axios";
import { Fragment } from "react";
import "./MyList.scss";

const MyList = ({ registers, id, history }) => {
  const regi_bool = registers === null ? false : true;
  let regi_res;

  const onClick = () => {
    const send = async () => {
      try {
        await axios.post("http://localhost:5000", {
          headers: {
            Authorization: sessionStorage
              .getItem("authorization")
              ?.substring(
                1,
                sessionStorage.getItem("authorization").length - 1
              ),
          },
        });
        window.location.replace("/manager/main");
      } catch (e) {
        console.error(e);
      }
    };
    send();
  };

  if (regi_bool) {
    regi_res = registers
      .filter((register) => register.status === "READY")
      .map((cur, idx) => {
        const date = cur.receptionDate
          .substring(2, 16)
          .replaceAll("-", ".")
          .replace("T", " ");
        return (
          <Fragment key={idx}>
            <span
              className="regi_subject"
              onClick={() =>
                history.push(`/user/regist/${id}/${cur.receptionId}`)
              }
            >
              {cur.subject}
            </span>
            <span>{date}</span>
            <span>R</span>
            <span>
              <button onClick={onClick}>접수</button>
            </span>
          </Fragment>
        );
      });
  }
  return (
    <div className="my_list_wrapper">
      <h4>자신에게 온 신청 리스트</h4>
      <div className="myList">
        <span>제목</span>
        <span>예약날짜</span>
        <span>상태</span>
        <span>접수</span>
        {regi_res}
      </div>
    </div>
  );
};

export default MyList;
