import "./NpWrapper.scss";

const NpWrapper = ({ id, username, cellphone, np }) => {
  return (
    <div className="np_wrapper" ref={np}>
      <input type="hidden" name="id" value={id}></input>
      <div className="name_wrapper">
        <label htmlFor="username">신청인</label>
        <input
          type="text"
          id="username"
          className="name_input"
          value={username}
          autoComplete="off"
          disabled
        ></input>
      </div>
      <div className="phone_wrapper">
        <label htmlFor="cellphone">핸드폰 번호</label>
        <input
          type="text"
          id="cellphone"
          className="phone_input"
          value={cellphone}
          autoComplete="off"
          disabled
        ></input>
      </div>
    </div>
  );
};

export default NpWrapper;
