import { combineReducers } from "redux";

import event from "./eventReducer";
import events from "./eventsReducer";
import news from "./newsReducer";
import newsItem from "./newsItemReducer";
import opportunities from "./opportunitiesReducer";
import opportunityItem from "./opportunityItemReducer";
import regions from "./regionsReducer";
import similarEvents from "./similarEventsReducer";
import loading from "./toggleLoadingReducer";

export default combineReducers({
  event,
  events,
  news,
  newsItem,
  opportunities,
  opportunityItem,
  regions,
  similarEvents,
  loading
});
