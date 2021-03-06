import axios from "axios";
import { useEffect, useState } from "react";
import "./ManagerSignUp.scss";
import Header from "../Header/Header";

const ManagerSignUp = () => {
  // state
  const [manager, setManger] = useState({
    imgPath: "",
    position: "",
    introduce: "",
  });
  const [preview, setPreview] = useState("");
  const { imgPath, position, introduce } = manager;

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
          imgPath: res.data.uploadName.name,
          position: res.data.position,
          introduce: res.data.introduce,
        });
        setPreview(res.data.uploadName);
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
        setPreview(e.target.result);
      };
      setManger({
        ...manager,
        imgPath: e.target.files[0],
      });
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

    const info_position = JSON.stringify({ position: manager.position });
    const info_introduce = JSON.stringify({ introduce: manager.introduce });

    const formData = new FormData();
    formData.append("imageFile", imgPath); // obj
    formData.append("position", info_position); // string
    formData.append("introduce", info_introduce); // string

    console.log(formData.get("imageFile"));

    const send = async () => {
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      try {
        const res = await axios.post(
          "http://localhost:5000/manager/managerInfo",
          formData,
          {
            headers: {
              Accept: "*/*",
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
      } catch (e) {
        console.error(e);
      }
    };

    send();
    alert("?????????????????????.");
  };

  return (
    <div className="managerSignup_wrapper">
      <Header></Header>
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
          {preview === "" ? null : <img src={preview} alt="img" />}
        </div>
        <div className="manager_detail">
          <div className="position_wrapper">
            <input
              type="text"
              name="position"
              value={position}
              className="position"
              onChange={onChange}
              placeholder="??????"
              autoComplete="off"
              required
            ></input>
          </div>
          <div className="introduce_wrapper">
            <input
              type="text"
              name="introduce"
              value={introduce}
              className="introduce"
              onChange={onChange}
              placeholder="?????????"
              autoComplete="off"
              required
            ></input>
          </div>
        </div>
        <button>??????</button>
      </form>
    </div>
  );
};

export default ManagerSignUp;
