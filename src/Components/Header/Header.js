import "./Header.scss";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = ({ history, first = null, second = null }) => {
  // conditional Rendering
  const cond = (first, second) => {
    return (
      <ul>
        <li>
          <Link to="/manager/all_register">{first}</Link>
        </li>
        <li>
          <Link to="/user/main">{second}</Link>
        </li>
      </ul>
    );
  };

  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          onClick={() => history.push(`/user/main`)}
        ></img>
        {cond(first, second)}
      </div>
    </header>
  );
};

export default withRouter(Header);
