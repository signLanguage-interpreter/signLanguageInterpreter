import "./RegiBoard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";

const RegiBoard = ({ match, history }) => {
  const registerPkId = match.params;
  const { pk, receptionId } = registerPkId;

  // state
  const [user, setUser] = useState({});
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
  };

  return (
    <>
      <Header></Header>
      <div className="regi_board_wrapper">
        <div className="regi_board_header">
          <h5>
            [{user.classification}] {user.subject}
          </h5>
          <span className="sub_header">
            {user.userNickName} | {user.receptionDate}
          </span>
        </div>
        <div className="regi_board_content">{user.content}</div>
        <div className="regi_board_comment_list">
          {commentList &&
            commentList.map((cur) => {
              return <div key={cur.id}>asd</div>;
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
