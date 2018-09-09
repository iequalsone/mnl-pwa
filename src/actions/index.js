import axios from "axios";
import {
  FETCH_EVENTS,
  FETCH_EVENTS_BY_KEYWORD,
  FETCH_EVENTS_BY_REGION,
  FETCH_EVENTS_BY_DATE,
  FETCH_EVENTS_BY_TAG,
  FETCH_EVENTS_BY_CATEGORY,
  FETCH_ALL_REGIONS,
  FETCH_EVENT_BY_SLUG
} from "./types";

export const fetchEvents = () => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/web/v2/full-events-list");
  dispatch({ type: FETCH_EVENTS, payload: res.data })
}

export const fetchEventsByKeyword = (keyword) => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v2/search-events/" + encodeURIComponent(keyword));
  dispatch({ type: FETCH_EVENTS_BY_KEYWORD, payload: res.data });
}

export const fetchEventsByRegion = (region) => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v2/search-events-by-region/" + encodeURIComponent(region));
  dispatch({ type: FETCH_EVENTS_BY_REGION, payload: res.data });
}

export const fetchEventsByDate = (date) => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v2/search-events-by-date/" + encodeURIComponent(date));
  dispatch({ type: FETCH_EVENTS_BY_DATE, payload: res.data });
}

export const fetchEventsByTag = (tag) => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v2/search-events-by-tag/" + encodeURIComponent(tag));
  dispatch({ type: FETCH_EVENTS_BY_TAG, payload: res.data });
}

export const fetchEventsByCategory = (category, eventId) => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v2/search-events-by-category/" + encodeURIComponent(category) + "/" + encodeURIComponent(eventId));
  dispatch({ type: FETCH_EVENTS_BY_CATEGORY, payload: res.data });
}

export const fetchAllRegions = () => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v1/regions-all");
  dispatch({ type: FETCH_ALL_REGIONS, payload: res.data });
}

export const fetchEventBySlug = (slug) => async dispatch => {
  const res = await axios.get("https://musicnl.ca/wp-json/dc/v2/event/" + encodeURIComponent(slug));
  dispatch({ type: FETCH_EVENT_BY_SLUG, payload: res.data });
}

