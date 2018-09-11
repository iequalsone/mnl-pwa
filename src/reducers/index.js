import { combineReducers } from "redux";

import event from "./eventReducer";
import events from "./eventsReducer";
import regions from "./regionsReducer"
import similarEvents from "./similarEventsReducer";
import loading from "./toggleLoadingReducer";

export default combineReducers({
  event,
  events,
  regions,
  similarEvents,
  loading
});
