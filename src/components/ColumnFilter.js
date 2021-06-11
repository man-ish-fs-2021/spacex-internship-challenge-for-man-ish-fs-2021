import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <select
        value={filterValue ? filterValue.value : "all"}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="all"> All</option>
        <option value="upcoming">Upcoming</option>
        <option value="successful">Successful</option>
        <option value="failure">Failed</option>
      </select>
      {/* <input
        value={filterValue || ""}
        onChange={(e) => setfilter(e.target.value)}
      /> */}
    </div>
  );
};

export default ColumnFilter;
