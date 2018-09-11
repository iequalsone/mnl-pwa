import { TOGGLE_LOADING } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return action.payload;
    default:
      return state;
  }
}