import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({
  resultsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  dispatch,
  decrementPage, 
  incrementPage
}) => {
  const pageNumbers = [];
  const numberPost = Math.ceil(totalPosts.length / resultsPerPage); // exemple : 100 posts / 10 résultats = 10 pages

  for (let i = 1; i <= numberPost; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <button
          type="button"
          className="btn btn-secondary btn-prev"
          onClick={() => dispatch(decrementPage())}
          disabled={currentPage === 1 ? true : false}
        >
          {"<<"}
        </button>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => dispatch(setCurrentPage(number))}
              className={
                currentPage === number ? "page-link active" : "page-link"
              }
            >
              {number}
            </a>
          </li>
        ))}
        <button
          type="button"
          className="btn btn-secondary btn-next"
          disabled={currentPage >= pageNumbers.length ? true : false}
          onClick={() => dispatch(incrementPage())}
        >
          {">>"}
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
