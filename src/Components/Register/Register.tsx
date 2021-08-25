import React from "react";
import "./Register.scss";

const Register = () => {
  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="register_wrapper">
      <h3 className="register_title">수어 통역 신청</h3>
      <form className="register" onSubmit={onSubmit}>
        <div className="txt">신청자</div>
        <input
          type="text"
          placeholder="신청자를 입력해주세요."
          className="input"
          required
        ></input>
        <div className="txt">핸드폰 번호</div>
        <input
          type="tel"
          placeholder="핸드폰 번호를 입력해주세요."
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          className="input"
          required
        ></input>
        <div className="txt">내용</div>
        <textarea
          rows={5}
          className="content input"
          placeholder="내용을 입력하세요."
          required
        ></textarea>
        <div className="txt">소속</div>
        <div className="agency">
          <div className="agency_child">
            <input
              type="radio"
              value="individual"
              id="individual"
              name="agency"
            ></input>
            <label htmlFor="individual">개인</label>
          </div>
          <div className="agency_child">
            <input
              type="radio"
              value="corporate"
              id="corporate"
              name="agency"
            ></input>
            <label htmlFor="corporate">법인</label>
          </div>
          <div className="agency_child">
            <input type="radio" value="group" id="group" name="agency"></input>
            <label htmlFor="group">단체</label>
          </div>
        </div>
        <div className="txt none">회사/단체 기관명</div>
        <input
          placeholder="회사 혹은 단체인 경우만 입력해주세요."
          className="input"
        />
        <div className="txt">통역 요청일</div>
        <input type="date" className="input date" required></input>
        <div className="txt">시간</div>
        <input type="text" className="input" placeholder="예)14:00"></input>
        <div className="txt">인원</div>
        <input
          type="text"
          className="input"
          placeholder="인원을 입력하세요."
        ></input>
        <div></div>
        <button type="submit">신청</button>
      </form>
    </div>
  );
};

export default Register;
