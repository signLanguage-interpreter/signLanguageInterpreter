import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./ManagerModify.scss";

const ManagerModify = () => {
  // ref
  const img_input = useRef(null);
  const img_icon = useRef(null);
  const img_file = useRef(null);

  // state
  const [manager, setManger] = useState({
    imgPath: "",
    position: "",
    introduce: "",
  });
  const { imgPath } = manager;

  // event
  const onImgClick = () => {
    img_input.current.click();
  };

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

  // useEffect
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = axios.get("http://localhost:5000", {
          headers: {
            headers: {
              Authorization: sessionStorage
                .getItem("authorization")
                ?.substring(
                  1,
                  sessionStorage.getItem("authorization").length - 1
                ),
            },
          },
        });
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
    fetch(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="managerModify_wrapper">
      <header>
        <h3>SLT</h3>
      </header>
      <form className="manager_regist_wrapper" encType="multipart/form-data">
        <div className="imgPath_wrapper">
          <div className="img_icon" ref={img_icon} onClick={onImgClick}>
            <i className="fas fa-image"></i>
            <img src="" alt={imgPath} title="img" ref={img_file}></img>
          </div>
          <input
            type="file"
            accept="image/*"
            className="img_file"
            name="imgPath"
            ref={img_input}
            value={imgPath}
            onChange={onImgChange}
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

export default ManagerModify;
