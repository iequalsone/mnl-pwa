import { combineReducers } from "redux";

import event from "./eventReducer";
import events from "./eventsReducer";
import regions from "./regionsReducer"
import similarEvents from "./similarEventsReducer";

export default combineReducers({
  event,
  events,
  regions,
  similarEvents
});

