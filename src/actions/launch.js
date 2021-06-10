import axios from "axios";
import { UPDATE_LAUNCH } from "./actionTypes";

export function fetchLaunch() {
  return async (dispatch) => {
    const url = "https://api.spacexdata.com/v3/launches";
    const response = await axios.get(url);
    // console.log("response", response);
    const data = await response.data;
    // console.log("data", data);
    dispatch(updateLaunch(data));
  };
}

export function updateLaunch(data) {
  return {
    type: UPDATE_LAUNCH,
    data,
  };
}
