import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { store } from "../../App";
import "./MyContent.scss";

const MyContent = ({ user, history }) => {
  const { id, userNickName, cellPhone, eMail } = user;

  const logout_action = (logged) => {
    return {
      type: "LOGOUT",
      payload: {
        logged: logged,
      },
    };
  };

  //event
  const onLogout = () => {
    alert("로그아웃되었습니다.");
    store.dispatch(logout_action(false));
    history.push("/login");
  };

  return (
    <div className="my_cont">
      <div className="my_thumbnail">
        <div className="my_img">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="my_info">
          <Link to={`/user/modifyMember/${id}`}>{userNickName}님</Link>
          <span className="cellPhone">{cellPhone}</span>
          <span className="eMail">{eMail}</span>
          <Link to="/manager/managerInfo">매니저 등록/수정</Link>
        </div>
        <div className="logout">
          <button to="/login" className="logout_btn" onClick={onLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MyContent);
