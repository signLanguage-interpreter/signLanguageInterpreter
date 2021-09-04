import { withRouter } from "react-router";
import "./Header.scss";

const Header = ({ history }) => {
  const onHeaderClick = () => {
    history.push("/main");
  };
  return (
    <header>
      <h2 onClick={onHeaderClick}>SLT</h2>
    </header>
  );
};

export default withRouter(Header);
