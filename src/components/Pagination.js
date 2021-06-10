import React from "react";

export const Pagination = (props) => {
  console.log("Pagination props", props);
  const {
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
  } = props;

  return (
    <div className="pagination">
      <div className="cell">
        <button
          className="prev"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              d="M2.121 4.99999L5.8335 8.71249L4.773 9.77299L-3.33786e-06 4.99999L4.773 0.22699L5.8335 1.28749L2.121 4.99999Z"
              fill="#4B5563"
            />
          </svg>
        </button>
      </div>

      {pageOptions.map((page) => (
        <button className="cell" onClick={() => gotoPage(page)}>
          {page + 1}
        </button>
      ))}

      <div className="cell">
        <button
          className="next"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              d="M3.879 5.00001L0.166504 1.28751L1.227 0.227009L6 5.00001L1.227 9.77301L0.166504 8.71251L3.879 5.00001Z"
              fill="#4B5563"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
