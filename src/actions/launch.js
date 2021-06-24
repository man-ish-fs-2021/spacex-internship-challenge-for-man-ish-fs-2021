import axios from "axios";
import { API } from "../utils/url";
import { UPDATE_LAUNCH, START_FETCH } from "./actionTypes";
// redux action
export function fetchLaunch() {
  return async (dispatch) => {
    const url = API.root();
    dispatch(startFetch());
    try {
      const response = await axios.get(url);
      const data = await response.data;

      dispatch(updateLaunch(data));
    } catch (err) {
      console.error(err);
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
