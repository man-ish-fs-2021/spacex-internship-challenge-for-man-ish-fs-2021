import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter, preFilteredRows, id, filteredRows } = column;
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);
  console.log("preFilteredRows", preFilteredRows);
  console.log("options", options);
  console.log("filtered Rows", filteredRows);
  return (
    <div>
      <select
        value={filterValue ? filterValue.value : "all"}
        onChange={(event) => setFilter(event.target.value || null)}
      >
        <option value="all"> All</option>
        <option value="successful"> </option>
      </select>
      {/* <input
        value={filterValue || ""}
        onChange={(e) => setfilter(e.target.value)}
      /> */}
    </div>
  );
};

export default ColumnFilter;
