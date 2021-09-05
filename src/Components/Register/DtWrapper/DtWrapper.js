import "./DtWrapper.scss";

const DtWrapper = ({ regi, setRegi, dt }) => {
  // event
  const onChange = (e) => {
    setRegi({ ...regi, [e.target.name]: e.target.value });
  };
  return (
    <div className="dt_wrapper" ref={dt}>
      <div>
        <label htmlFor="receptionDate">날짜/시간</label>
        <input
          type="datetime-local"
          id="receptionDate"
          name="receptionDate"
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default DtWrapper;
