import "./DtWrapper.scss";

const DtWrapper = ({ regi, setRegi }) => {
  // event
  const onChange = (e) => {
    setRegi({ ...regi, [e.target.name]: e.target.value });
  };
  return (
    <div className="dt_wrapper">
      <div>
        <input
          type="datetime-local"
          id="receptionDate"
          name="receptionDate"
          value={regi.receptionDate}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default DtWrapper;
