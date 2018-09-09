import {
  FETCH_EVENTS_BY_CATEGORY
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
