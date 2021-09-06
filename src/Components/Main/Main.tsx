import logo from "../img/logo.png";
import Register from "../Register/Register";
import "./Main.scss";

const Main = () => {
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
        <section className="user"></section>
      </main>
    </div>
  );
};

export default Main;
