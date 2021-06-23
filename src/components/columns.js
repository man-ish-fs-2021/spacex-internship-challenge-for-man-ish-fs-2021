export const COLUMNS = [
  {
    Header: "No:",
    accessor: "flight_number",
    minWidth: 32,
    // filterable: false,
    Cell: ({ row }) => {
      // console.log("Row", row);
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

      return date.toString().substring(0, 21);
    },
    disableGlobalFilter: true,
  },
  {
    Header: "Location",
    accessor: (row) => {
      return row.launch_site.site_name;
    },
    minWidth: 120,
    disableGlobalFilter: true,
  },
  {
    Header: "Mission",
    accessor: "mission_name",
    width: 150,
    disableGlobalFilter: true,
  },
  {
    Header: "Orbit",
    accessor: (originalRow) => {
      return originalRow.rocket.second_stage.payloads[0].orbit;
    },
    minWidth: 48,
    disableGlobalFilter: true,
  },
  {
    Header: "Launch-Status",
    accessor: (originalRow) => {
      if (originalRow.upcoming) {
        return "upcoming";
      } else {
        return originalRow.launch_success;
      }
    },
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
  },
  {
    Header: "Rocket",
    minWidth: 88,
    accessor: (row) => {
      return row.rocket.rocket_name;
    },
    disableGlobalFilter: true,
  },
];
