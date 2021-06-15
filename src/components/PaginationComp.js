import React from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";

export const PaginationComp = (props) => {
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
      <Pagination
        defaultCurrent={1}
        total={props.data.length}
        showSizeChanger={false}
        onChange={(page) => {
          gotoPage(page - 1);
        }}
      />
    </div>
  );
};

export default PaginationComp;
