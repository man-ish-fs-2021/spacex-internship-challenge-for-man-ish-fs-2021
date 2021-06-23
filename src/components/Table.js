import React, { useMemo, useState } from "react";
import { PaginationComp, LoadingState } from "./index";
import { useSelector } from "react-redux";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import Modal from "react-modal";
import { GlobalFilter } from "./GlobalFilter";
import ModalComp from "./ModalComp";
Modal.setAppElement("#root");
export const Table = ({ columns, data }) => {
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = tableInstance;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState({});
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const handleShow = (selectedId) => {
    setSelectedRowId(selectedId);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        preGlobalFilteredRows={preGlobalFilteredRows}
      />
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

        <tbody {...getTableBodyProps()} className="table-body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="tr-body"
                onClick={() => {
                  console.log("selected", row);

                  openModal();
                  handleShow(row.id);
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
        data={data}
        rowData={selectedRowId}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      />

      <PaginationComp {...tableInstance} />
    </>
  );
};

export default Table;
