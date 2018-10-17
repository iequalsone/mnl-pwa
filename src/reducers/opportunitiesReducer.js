import {
  FETCH_OPPORTUNITIES,
  FETCH_OPPORTUNITIES_BY_TAG,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OPPORTUNITIES:
      return action.payload;
    case FETCH_OPPORTUNITIES_BY_TAG:
      return action.payload;
    default:
      return state;
  }
};
