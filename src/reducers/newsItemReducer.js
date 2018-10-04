import { FETCH_NEWS_BY_SLUG } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS_BY_SLUG:
      return action.payload;
    default:
      return state;
  }
};