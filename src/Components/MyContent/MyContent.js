import { Link } from "react-router-dom";
import "./MyContent.scss";

const MyContent = () => {
  return (
    <div className="my_cont">
      <div className="my_thumbnail">
        <div className="my_img">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="my_info">
          <span className="userNickName">이름님</span>
          <span className="cellPhone">핸드폰 번호</span>
          <span className="eMail">이메일</span>
        </div>
        <div className="logout">
          <Link to="/login" className="logout_btn">
            로그아웃
          </Link>
        </div>
      </div>
      <div className="my_nav"></div>
    </div>
  );
};

export default MyContent;
