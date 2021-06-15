import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "No:",
    accessor: "flight_number",
    minWidth: 32,
    // filterable: false,
    Cell: ({ row }) => {
      console.log("Row", row);
      return <div>{row.index + 1}</div>;
    },
    disableFilters: true,
  },
  {
    Header: "Launched (UTC)",
    accessor: "launch_date_utc",
    minWidth: 144,
    Cell: ({ value }) => {
      // console.log("Date", value);
      const date = new Date(value);

      return <div>{date.toString().substring(0, 21)}</div>;
    },
    disableFilters: true,
  },
  {
    Header: "Location",
    accessor: (row) => {
      return row.launch_site.site_name;
    },
    minWidth: 120,
    disableFilters: true,
  },
  {
    Header: "Mission",
    accessor: "mission_name",
    width: 150,
    disableFilters: true,
  },
  {
    Header: "Orbit",
    accessor: (originalRow) => {
      return originalRow.rocket.second_stage.payloads[0].orbit;
    },
    minWidth: 48,
    disableFilters: true,
  },
  {
    Header: "Launch Status",
    accessor: (originalRow) => {},
    minWidth: 88,
    Cell: ({ row }) => {
      if (row.original.upcoming) {
        return <div className="upcoming">Upcoming</div>;
      } else if (row.original.launch_success) {
        return <div className="successful">Success</div>;
      } else {
        return <div className="failure">Failure</div>;
      }
    },
    Filter: ColumnFilter,
    filter: (rows, columnIds, filterValue) => {
      console.log("filterValue", filterValue);
      console.log("rows", rows);
      console.log("col", columnIds);
      rows.map((row) => {
        console.log("row", row);
        let Rows = [];
        if (filterValue === "all") {
          return true;
        }
        // if (filterValue === null) {
        //   return rows.upcoming === "upcoming";
        // }
        if (filterValue === true) {
          Rows.push(row);
        }
        if (filterValue === false) {
          Rows.push(row);
        }
        console.log("Rows", Rows);
        return Rows;
      });
    },
  },
  {
    Header: "Rocket",
    minWidth: 88,
    accessor: (row) => {
      return row.rocket.rocket_name;
    },
    disableFilters: true,
  },
];
