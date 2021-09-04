import "./NpWrapper.scss";

const NpWrapper = ({ id, userNickName, cellPhone, np }) => {
  return (
    <div className="np_wrapper" ref={np}>
      <input type="hidden" name="id" value={id}></input>
      <div className="name_wrapper">
        <i className="fas fa-user"></i>
        <input
          type="text"
          className="name_input"
          value={userNickName}
          autoComplete="off"
          disabled
        ></input>
      </div>
      <div className="phone_wrapper">
        <i className="fas fa-phone"></i>
        <input
          type="text"
          className="phone_input"
          value={cellPhone}
          autoComplete="off"
          disabled
        ></input>
      </div>
    </div>
  );
};

export default NpWrapper;
