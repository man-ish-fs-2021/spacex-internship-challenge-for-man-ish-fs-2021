export const COLUMNS = [
  {
    Header: "No:",
    id: "row",
    // filterable: false,
    Cell: (row) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    Header: "Launched (UTC)",
    accessor: "launch_date_utc",
    Cell: ({ value }) => {
      const date = Date(value).substring(0, 15);
      return <div>{date}</div>;
    },
  },
  {
    Header: "Location",
    accessor: (row) => {
      return row.launch_site.site_name;
    },
  },
  {
    Header: "Mission",
    accessor: "mission_name",
  },
  {
    Header: "Orbit",
    accessor: (originalRow) => {
      return originalRow.rocket.second_stage.payloads[0].orbit;
    },
  },
  {
    Header: "Launch Status",
    accessor: "upcoming",
    Cell: ({ row }) => {
      if (row.upcoming) {
        return <div className="upcoming">Upcoming</div>;
      } else if (row.launch_success) {
        return <div className="successful">Success</div>;
      } else {
        return <div className="failure">Failure</div>;
      }
    },
  },
  {
    Header: "Rocket",
    accessor: (row) => {
      return row.rocket.rocket_name;
    },
  },
];
