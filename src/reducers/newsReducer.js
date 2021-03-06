import {
  FETCH_NEWS,
  FETCH_NEWS_BY_TAG,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload;
    case FETCH_NEWS_BY_TAG:
      return action.payload;
    default:
      return state;
  }
};
