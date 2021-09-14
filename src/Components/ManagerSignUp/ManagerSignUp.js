import { useState } from "react";
import "./ManagerSignUp.scss";

const ManagerSignUp = () => {
  // state
  const [manager, setManger] = useState({
    imgPath: "",
    position: "",
    introduce: "",
  });
  const { imgPath } = manager;

  const onImgChange = async (e) => {
    if (e.target.files != null) {
      const fd = new FormData();
      fd.append("file", e.target.files[0]);
    }
  };

  const onChange = (e) => {
    setManger({
      ...manager,
      [e.target.name]: e.target.value,
    });
    console.log(`${[e.target.name]}: ${e.target.value}`);
  };
  return (
    <div className="managerModify_wrapper">
      <header>
        <h3>SLT</h3>
      </header>
      <form className="manager_regist_wrapper" encType="multipart/form-data">
        <div className="imgPath_wrapper">
          <div className="img_icon">
            <i className="fas fa-image"></i>
            <img src={imgPath} alt={imgPath} title="img"></img>
          </div>
          <input
            type="file"
            accept="image/*"
            className="img_file"
            name="imgPath"
            value={imgPath}
            onChange={onChange}
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
            ></input>
          </div>
          <div className="introduce_wrapper">
            <input
              type="text"
              name="introduce"
              className="introduce"
              onChange={onChange}
              placeholder="소개말"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManagerSignUp;
