import React, { useState } from "react";
// import "antd/dist/antd.css";
// import { Pagination } from "antd";

export const PaginationComp = (props) => {
  console.log("Pagination props", props);
  const {
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = props;

  const [pageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(-1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const handlePrev = () => {
    previousPage();
    if (pageIndex % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    nextPage();
    if (pageIndex > maxPageNumberLimit - 1) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const renderPageNumbers = pageOptions.map((pageNumber) => {
    if (
      pageNumber < maxPageNumberLimit + 1 &&
      pageNumber > minPageNumberLimit
    ) {
      return (
        <div
          className={pageIndex == pageNumber ? "cell activeCell" : "cell"}
          onClick={() => gotoPage(pageNumber)}
        >
          {pageNumber + 1}
        </div>
      );
    } else {
      return null;
    }
  });
  let pageIncrementBtn = null;
  if (pageOptions.length > maxPageNumberLimit + 1) {
    pageIncrementBtn = (
      <div className="cell" onClick={handleNext}>
        {" "}
        &hellip;{" "}
      </div>
    );
  }
  console.log(maxPageNumberLimit);
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 0) {
    pageDecrementBtn = (
      <div className="cell" onClick={handlePrev}>
        {" "}
        &hellip;{" "}
      </div>
    );
  }
  return (
    <div className="pagination">
      <div className="pagination-container">
        <div
          className={canPreviousPage ? "cell prev" : "cell prev disabledCell"}
          onClick={handlePrev}
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
        </div>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <div
          className={canNextPage ? "cell next" : "cell next disabledCell"}
          onClick={handleNext}
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
        </div>
      </div>
    </div>
  );
};

export default PaginationComp;
