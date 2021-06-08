import { UPDATE_LAUNCH } from "../actions/actionTypes";

export default function launches(state = [], action) {
  switch (action.type) {
    case UPDATE_LAUNCH:
      return action.data;
    default:
      return state;
  }
}
