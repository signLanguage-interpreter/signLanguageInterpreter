import { withRouter } from "react-router";
import { store } from "../../App";
import "./MyContent.scss";

const MyContent = ({ user, history }) => {
  const { id, userNickName, username, cellPhone, email } = user;

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
          <span
            className="userNickName"
            onClick={() => history.push(`/user/modifyMember/${id}`)}
          >
            {userNickName}님
          </span>
          <span className="cellPhone">{cellPhone}</span>
          <span className="eMail">{email}</span>
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
