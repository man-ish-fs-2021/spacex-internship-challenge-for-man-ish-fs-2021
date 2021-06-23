import React from "react";

export const GlobalFilter = ({ setGlobalFilter, preGlobalFilteredRows }) => {
  console.log("Golbal fiter rows", preGlobalFilteredRows);

  return (
    <select
      className="global-filter"
      onChange={(e) => setGlobalFilter(e.target.value)}
    >
      <option value="">All</option>
      <option value="upcoming">Upcoming</option>
      <option value={false}>Failed</option>
      <option value={true}>Success</option>
    </select>
  );
};

export default GlobalFilter;
