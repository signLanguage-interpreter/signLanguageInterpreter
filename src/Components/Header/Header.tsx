import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/login">로그인</Link>
      <Link to="/join">회원가입</Link>
      <Link to="/register">신청</Link>
    </header>
  );
};

export default Header;
