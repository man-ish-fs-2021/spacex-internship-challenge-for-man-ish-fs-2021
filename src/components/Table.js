import React from "react";
import { useEffect } from "react";
import { fetchLaunch } from "../actions/launch";

import { useDispatch, useSelector } from "react-redux";
function Table(props) {
  const launch = useSelector((state) => state.launch);
  const dispatch = useDispatch();
  //   dispatch(fetchLaunch());
  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);
  return <div></div>;
}

export default Table;
