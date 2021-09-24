import "./RegiBoard.scss";
import logo from "../img/logo.png";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const RegiBoard = ({ match, history }) => {
  const registerPkId = match.params;
  const { pk, receptionId } = registerPkId;

  console.log(match.params);

  // state
  const [user, setUser] = useState({
    orderStatus: "",
    subject: "",
    content: "",
    receptionDate: "",
    classification: "",
  });
  const { classification, subject, content, orderStatus, receptionDate } = user;

  const [comments, setComments] = useState([]);

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
        setUser({
          ...user,
          classification: res.data.user.classification,
          subject: res.data.user.subject,
          content: res.data.user.content,
          orderStatus: res.data.user.orderStatus,
          receptionDate: res.data.user.receptionDate,
        });
        setComments(res.data.regi_list);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const comments_bool = comments === null ? false : true;
  let comments_res;
  if (comments_bool) {
    comments_res = comments.map((cur) => {
      return (
        <Fragment key={cur.id}>
          <div className="comments_userNickName_time">
            {cur.userNickName}({cur.registryTime})
          </div>
          <div className="comments_content">{cur.content}</div>
        </Fragment>
      );
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const send = async () => {
      try {
        await axios.post(
          `http://localhost:5000/user/regist/${pk}/${receptionId}`,
          comment,
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
        window.location.replace(`/user/regist/${pk}/${receptionId}`);
        history.go(0);
      } catch (e) {
        console.error(e);
      }
    };
    send();
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="regi_board_wrapper">
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/user/main")}
          ></img>
        </div>
      </header>
      <div className="regi_board">
        <section>
          <div className="subject_class_place">
            [{classification}]{subject}
          </div>
          <div className="status_date_place">
            <span className="status_place">{orderStatus}</span>
            <span className="date_place">{receptionDate}</span>
          </div>
          <div className="content_place">{content}</div>
          <div className="comment_place">
            <h4>댓글</h4>
            <div className="comments">{comments_res}</div>
            <form className="form_comments" onSubmit={onSubmit}>
              <textarea
                type="text"
                className="input_comments"
                rows={3}
                value={comment}
                onChange={onChange}
              ></textarea>
              <button type="submit" className="submit_comments">
                등록
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegiBoard;
