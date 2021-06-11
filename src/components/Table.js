import React, { useMemo, useState } from "react";
import { Pagination } from "./index";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";
import { useTable, usePagination } from "react-table";
import Modal from "react-modal";
Modal.setAppElement("#root");
export const Table = () => {
  const launch = useSelector((state) => state.launch.launch);
  console.log("launch", launch);
  // const isProgress = useSelector((state) => state.launch.isProgress);
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
  const handleShow = (selected) => {
    setSelectedRow(selected);
  };

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
                  openModal();
                  handleShow(row.original);
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

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal-wrapper"
      >
        <div className="icon" onClick={() => closeModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M5.99999 4.82166L10.125 0.696655L11.3033 1.87499L7.17832 5.99999L11.3033 10.125L10.125 11.3033L5.99999 7.17832L1.87499 11.3033L0.696655 10.125L4.82166 5.99999L0.696655 1.87499L1.87499 0.696655L5.99999 4.82166Z"
              fill="#4B5563"
            />
          </svg>
        </div>
        <div className="modal">
          <div className="header">
            <div className="header-img"></div>
            <div className="header-info">
              <div className="upper">
                <div className="header-mission">
                  <div className="header-mission-name">
                    {selectedRow.mission_name}
                  </div>
                  <div className="header-mission-status">
                    {selectedRow.upcoming ? (
                      <div className="upcoming">Upcoming</div>
                    ) : selectedRow.launch_success ? (
                      <div className="successful">Success</div>
                    ) : (
                      <div className="failure">Failed</div>
                    )}
                  </div>
                </div>
                <div className="header-rocket">
                  <div className="header-rocket-name">
                    {selectedRow.rocket.rocket_name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="desc">
            {selectedRow.details ? (
              <div>
                <p>{selectedRow.details}</p>
                {/* <a href={wiki} target="_blank"> */}
                Wikipedia
                {/* </a> */}
              </div>
            ) : (
              <div>
                No details available currently.
                {/* <a href={wiki} target="_blank"> */}
                Wikipedia
                {/* </a> */}
              </div>
            )}
          </div>
          <div className="info"></div>
        </div>
      </Modal>

      <Pagination {...tableInstance} />
    </>
  );
};

export default Table;
