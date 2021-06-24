import React, { useState } from "react";
import { PaginationComp } from "./index";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import Modal from "react-modal";
import { GlobalFilter } from "./GlobalFilter";
import ModalComp from "./ModalComp";
// react-modal component
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
    globalFilteredRows,
  } = tableInstance;
  // modal state
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState({});
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const handleShow = (selectedId, date) => {
    // sending the id of the selected row to the modal
    setSelectedRowId({ selectedId, date });
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
        {globalFilteredRows.length === 0 && (
          <div className="empty-state">
            No results found for the specified filter
          </div>
        )}
        <tbody {...getTableBodyProps()} className="table-body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="tr-body"
                onClick={() => {
                  openModal();
                  handleShow(row.id, row.original.launch_date_utc);
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
