import { FETCH_ALL_REGIONS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_REGIONS:
      return action.payload;
    default:
      return state;
  }
}