import "./DtWrapper.scss";

const DtWrapper = ({ regi, setRegi, dt }) => {
  // event
  const onChange = (e) => {
    setRegi({ ...regi, [e.target.name]: e.target.value });
  };
  return (
    <div className="dt_wrapper" ref={dt}>
      <div>
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
