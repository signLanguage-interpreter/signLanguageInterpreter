import logo from "../img/logo.png";
import MyContent from "../MyContent/MyContent";
import Register from "../Register/Register";
import "./Main.scss";

const Main = () => {
  // useEffect
  return (
    <div className="main">
      <header>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
      </header>
      <main>
        <section className="regi">
          <Register></Register>
        </section>
        <section className="user">
          <MyContent></MyContent>
        </section>
      </main>
    </div>
  );
};

export default Main;
