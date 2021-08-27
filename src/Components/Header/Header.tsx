import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/login" className="link">
        로그인
      </Link>
      <Link to="/join" className="link">
        회원가입
      </Link>
      <Link to="/register" className="link">
        신청
      </Link>
    </header>
  );
};

export default Header;
