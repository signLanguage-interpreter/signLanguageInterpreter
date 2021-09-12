import "./Nomatch.scss";
import logo from "../img/logo.png";

const Nomatch = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/user/main")}
          ></img>
        </div>
      </header>
      <section>
        <h2>에러 페이지 입니다.</h2>
        <h3>홈 버튼을 눌러주세요.</h3>
      </section>
    </div>
  );
};

export default Nomatch;
