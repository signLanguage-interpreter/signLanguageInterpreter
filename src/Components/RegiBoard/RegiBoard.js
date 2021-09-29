import "./RegiBoard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";

const dummy_comment = [
  {
    commentId: 1,
    content: "123123123",
    userNickName: "민경호",
    registryTime: "2021-09-29T14:00:00",
  },
  {
    commentId: 2,
    content: "qweqweqwe",
    userNickName: "rlarlarla",
    registryTime: "2021-09-29T14:00:00",
  },
];

const RegiBoard = ({ match, history }) => {
  const registerPkId = match.params;
  const { pk, receptionId } = registerPkId;

  // state
  const [user, setUser] = useState({
    classification: "",
    subject: "",
    orderStatus: "",
    receptionDate: "",
    content: "",
  });
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  const { classification, subject, orderStatus, receptionDate, content } = user;

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/user/regist/${pk}/${receptionId}`,
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
        setUser(res.data.user);
        setCommentList(res.data.regi_list);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // event
  const onCommentChange = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    const send = async () => {
      try {
        const res = await axios.post(
          `http://localhost:5000/user/${receptionId}/comment`,
          { content: comment },
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
        alert("등록하였습니다.");
        // history.go(0);
      } catch (e) {
        console.error(e);
      }
    };
    send();
  };

  return (
    <>
      <Header></Header>
      <div className="regi_board_wrapper">
        <div className="regi_board_header">
          <h5>
            [{classification}] {subject}
          </h5>
          <span className="sub_header">
            {orderStatus} | {receptionDate.replace("T", " ")}
          </span>
        </div>
        <div className="regi_board_content">{content}</div>
        <div className="regi_board_comment_list">
          {commentList &&
            commentList.map((cur) => {
              return (
                <div className="comment" key={cur.commentId}>
                  <span style={{ color: "#999" }}>{cur.userNickName}</span>
                  <span>{cur.content}</span>
                  <span style={{ color: "#999", fontSize: ".875rem" }}>
                    {cur.registryTime.substring(5, 19).replace("T", " ")}
                  </span>
                </div>
              );
            })}
          {dummy_comment.map((cur) => {
            return (
              <div className="comment" key={cur.commentId}>
                <span style={{ color: "#999" }}>{cur.userNickName}</span>
                <span>{cur.content}</span>
                <span style={{ color: "#999", fontSize: ".875rem" }}>
                  {cur.registryTime.substring(5).replace("T", " ")}
                </span>
              </div>
            );
          })}
        </div>
        <div className="regi_board_comment">
          <form onSubmit={onSubmitComment}>
            <textarea
              rows={3}
              value={comment}
              onChange={onCommentChange}
            ></textarea>
            <button type="submit">등록</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegiBoard;
