import axios from "axios";
import { UPDATE_LAUNCH, START_FETCH } from "./actionTypes";

export function fetchLaunch() {
  return async (dispatch) => {
    const url = "https://api.spacexdata.com/v3/launches";
    dispatch(startFetch());
    try {
      const response = await axios.get(url);
      // console.log("response", response);
      const data = await response.data;
      console.log("data", data);

      dispatch(updateLaunch(data));
    } catch (err) {
      console.log(err);
    }
  };
}
export function startFetch() {
  return {
    type: START_FETCH,
  };
}
export function updateLaunch(data) {
  return {
    type: UPDATE_LAUNCH,
    data,
  };
}
