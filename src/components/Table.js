import React, { useMemo } from "react";
import { useEffect } from "react";
import { fetchLaunch } from "../actions/launch";
import { useDispatch, useSelector } from "react-redux";
import { COLUMNS } from "./columns";
import { useTable } from "react-table";
export const Table = () => {
  const launch = useSelector((state) => state.launch);
  // console.log("Launch", launch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);
  //   dispatch(fetchLaunch());
  const columns = useMemo(() => COLUMNS, []);
  const data = launch;
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: { minWidth: column.minWidth },
                })}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="tr-body">
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps({
                      style: { minWidth: cell.column.minWidth },
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
