import { combineReducers } from "redux";

import event from "./eventReducer";
import events from "./eventsReducer";
import news from "./newsReducer";
import newsItem from "./newsItemReducer";
import regions from "./regionsReducer";
import similarEvents from "./similarEventsReducer";
import loading from "./toggleLoadingReducer";

export default combineReducers({
  event,
  events,
  news,
  newsItem,
  regions,
  similarEvents,
  loading
});
