import "./Pagination.scss";
import { withRouter } from "react-router";

const Pagination = ({ status, paging, history }) => {
  const { startPage, endPage } = paging;

  const page = (startPage, endPage) => {
    const page_list = [];
    for (let i = startPage; i <= endPage; i++) {
      page_list.push(
        <li
          key={i}
          onClick={() => history.push(`main?status=${status}&page=${i}`)}
        >
          {i}
        </li>
      );
    }
    return page_list;
  };
  return (
    <div className="pagination_wrapper">
      <ul>{page(startPage, endPage)}</ul>
    </div>
  );
};

export default withRouter(Pagination);
