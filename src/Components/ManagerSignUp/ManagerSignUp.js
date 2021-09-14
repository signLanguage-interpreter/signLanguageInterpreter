import axios from "axios";
import { useRef, useState } from "react";
import "./ManagerSignUp.scss";
import logo from "../img/logo.png";

const ManagerSignUp = () => {
  // ref
  const img_input = useRef(null);

  // state
  const [manager, setManger] = useState({
    imgPath: "",
    position: "",
    introduce: "",
  });
  const { imgPath } = manager;

  const [loading, setLoading] = useState(false);

  const onImgClick = () => {
    img_input.current.click();
  };

  const onImgChange = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const res = await axios.post(
        "http://localhost:5000/user/managerSignUp",
        formData,
        {
          headers: {
            Authorization: sessionStorage
              .getItem("authorization")
              ?.substring(
                1,
                sessionStorage.getItem("authorization").length - 1
              ),
          },
        }
      );
      setManger({
        ...manager,
        imgPath: res.data,
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  const onChange = (e) => {
    setManger({
      ...manager,
      [e.target.name]: e.target.value,
    });
    console.log(`${[e.target.name]}: ${e.target.value}`);
  };

  return (
    <div className="managerSignup_wrapper">
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.location.replace("/user/main")}
          ></img>
        </div>
      </header>
      <form className="manager_regist_wrapper" encType="multipart/form-data">
        <div className="imgPath_wrapper">
          <div className="img_icon" onClick={onImgClick}>
            <i className="fas fa-image"></i>
            <img src={imgPath} alt={imgPath} title="img"></img>
          </div>
          <input
            type="file"
            accept="image/*"
            className="img_file"
            name="imgPath"
            onChange={onImgChange}
            ref={img_input}
          ></input>
        </div>
        <div className="manager_detail">
          <div className="position_wrapper">
            <input
              type="text"
              name="position"
              className="position"
              onChange={onChange}
              placeholder="직책"
              autoComplete="off"
            ></input>
          </div>
          <div className="introduce_wrapper">
            <input
              type="text"
              name="introduce"
              className="introduce"
              onChange={onChange}
              placeholder="소개말"
              autoComplete="off"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManagerSignUp;
