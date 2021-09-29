import "./RegiBoard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";

const RegiBoard = ({ match, history }) => {
  const registerPkId = match.params;
  const { pk, receptionId } = registerPkId;

  console.log(match.params);

  // state
  const [board, setBoard] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

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
        setBoard(res.data.board);
        setCommentList(res.data.commentList);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // event
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Header></Header>
      <div className="regi_board_wrapper">
        <div className="regi_board_header">
          <h5>
            [{board.classification}] {board.subject}
          </h5>
          <span className="sub_header">
            {board.userNickName} | {board.receptionDate}
          </span>
        </div>
        <div className="regi_board_content">{board.content}</div>
        <div className="regi_board_comment_list">
          {commentList &&
            commentList.map((cur) => {
              return <div>asd</div>;
            })}
          <div>asd</div>
        </div>
        <div className="regi_board_comment">
          <form>
            <textarea
              rows={3}
              value={comment}
              onChange={onCommentChange}
            ></textarea>
            <button>등록</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegiBoard;
