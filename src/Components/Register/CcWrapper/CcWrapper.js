import "./CcWrapper.scss";

const CcWrapper = ({ regi, setRegi, cc }) => {
  // event
  const onChange = (e) => {
    setRegi({
      ...regi,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="cc_wrapper" ref={cc}>
      <div className="classi_subject_wrapper">
        <div className="classi_wrapper">
          <label htmlFor="classification">분류</label>
          <select id="classification" name="classification" onChange={onChange}>
            <option value="default">-선택-</option>
            <option value="medical">의료</option>
            <option value="edu">교육</option>
          </select>
        </div>
        <div className="subject_wrapper">
          <label htmlFor="subject">제목</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="subject_input"
            autoComplete="off"
            onChange={onChange}
          ></input>
        </div>
        <div className="content_wrapper">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            rows={10}
            name="content"
            onChange={onChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CcWrapper;
