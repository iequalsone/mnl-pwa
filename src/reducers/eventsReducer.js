import {
  FETCH_EVENTS,
  FETCH_EVENTS_BY_KEYWORD,
  FETCH_EVENTS_BY_REGION,
  FETCH_EVENTS_BY_DATE,
  FETCH_EVENTS_BY_TAG
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;
    case FETCH_EVENTS_BY_KEYWORD:
      return action.payload;
    case FETCH_EVENTS_BY_REGION:
      return action.payload;
    case FETCH_EVENTS_BY_DATE:
      return action.payload;
    case FETCH_EVENTS_BY_TAG:
      return action.payload;
    default:
      return state;
  }
};
