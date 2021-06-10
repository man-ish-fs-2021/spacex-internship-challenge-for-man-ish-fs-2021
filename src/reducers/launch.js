import { UPDATE_LAUNCH, START_FETCH } from "../actions/actionTypes";
const initialState = {
  launch: [],
  isProgress: false,
};

export default function launches(state = initialState, action) {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isProgress: true,
      };
    case UPDATE_LAUNCH:
      return {
        ...state,
        launch: action.data,
        isProgress: false,
      };
    default:
      return state;
  }
}
