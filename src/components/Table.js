import React, { useCallback, useMemo, useState } from "react";
import { Pagination } from "./index";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";
import { useTable, usePagination } from "react-table";
import { ModalComp } from "./index";
import Modal from "react-modal";
Modal.setAppElement("#root");
export const Table = () => {
  const launch = useSelector((state) => state.launch.launch);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => launch, [launch]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const handleShow = useCallback((selected) => {
    setSelectedRow(selected);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }
  console.log("Selected row", selectedRow);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: { width: column.width },
                  })}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="tr-body"
                onClick={() => {
                  handleShow(row.original);
                  openModal();
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        style: { width: cell.column.width },
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
      {/* if is progress is true, dont show modal and show a loading screen */}

      <ModalComp
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        {...selectedRow}
      />

      <Pagination {...tableInstance} />
    </>
  );
};

export default Table;
