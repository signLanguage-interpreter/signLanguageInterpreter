import axios from "axios";
import { useEffect, useState } from "react";
import "./ManagerSignUp.scss";
import logo from "../img/logo.png";

const ManagerSignUp = () => {
  // state
  const [manager, setManger] = useState({
    imgPath: "",
    position: "",
    introduce: "",
  });
  const { imgPath } = manager;

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/manager/managerInfo",
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
        console.log(res);
        setManger({
          ...manager,
          imgPath: res.data.imgPath,
          position: res.data.position,
          introduce: res.data.introduce,
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onImgChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setManger({
          ...manager,
          imgPath: e.target.result,
        });
      };
    }
  };

  const onChange = (e) => {
    setManger({
      ...manager,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const info = JSON.stringify({
      position: manager.position,
      introduce: manager.introduce,
    });

    const formData = new FormData();
    formData.append("file", manager.imgPath);
    formData.append("info", info);

    const send = async () => {
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      try {
        await axios.post(
          "http://localhost:5000/manager/managerInfo",
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
      } catch (e) {
        console.error(e);
      }
    };

    send();
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
      <form
        className="manager_regist_wrapper"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <div className="imgPath_wrapper">
          <input
            type="file"
            accept="image/*"
            className="img_file"
            onChange={onImgChange}
            name="imgPath"
            required
          ></input>
          {imgPath === "" ? null : <img src={imgPath} alt="img" />}
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
              required
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
              required
            ></input>
          </div>
        </div>
        <button>등록</button>
      </form>
    </div>
  );
};

export default ManagerSignUp;
