import "./AllRegi.scss";
import logo from "../img/logo.png";

const AllRegi = ({ history }) => {
  return (
    <div>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/manager/main")}
          ></img>
          <div>
            <span onClick={() => history.push("/manager/all_register")}>
              다른 통역사 접수 보러가기
            </span>
            <span onClick={() => history.push("/user/main")}>
              신청하러 가기
            </span>
          </div>
        </div>
      </header>
      <main>
        <section>
          <span className="fb">제목</span>
          <span className="fb">신청자</span>
          <span className="fb">날짜</span>
          <span className="fb">상태</span>
        </section>
      </main>
    </div>
  );
};

export default AllRegi;
