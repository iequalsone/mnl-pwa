import axios from "axios";
import {
  FETCH_EVENTS,
  FETCH_EVENTS_BY_KEYWORD,
  FETCH_EVENTS_BY_REGION,
  FETCH_EVENTS_BY_DATE,
  FETCH_EVENTS_BY_TAG,
  FETCH_EVENTS_BY_CATEGORY,
  FETCH_ALL_REGIONS,
  FETCH_EVENT_BY_SLUG,
  FETCH_NEWS,
  FETCH_NEWS_BY_TAG,
  FETCH_NEWS_BY_SLUG,
  FETCH_OPPORTUNITIES,
  FETCH_OPPORTUNITIES_BY_TAG,
  FETCH_OPPORTUNITY_BY_SLUG,
  TOGGLE_LOADING
} from "./types";

export const fetchEvents = () => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/full-events-list");
  dispatch({
    type: FETCH_EVENTS,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/full-events-list", method: "GET", json: res.data }
      }
    }
  });
}

export const fetchEventsByKeyword = (keyword) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/search-events/" + encodeURIComponent(keyword));
  dispatch({
    type: FETCH_EVENTS_BY_KEYWORD,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/search-events/" + encodeURIComponent(keyword), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchEventsByRegion = (region) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-region/" + encodeURIComponent(region));
  dispatch({
    type: FETCH_EVENTS_BY_REGION,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-region/" + encodeURIComponent(region), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchEventsByDate = (date) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-date/" + encodeURIComponent(date));
  dispatch({
    type: FETCH_EVENTS_BY_DATE,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-date/" + encodeURIComponent(date), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchEventsByTag = (tag) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-tag/" + encodeURIComponent(tag));
  dispatch({
    type: FETCH_EVENTS_BY_TAG,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-tag/" + encodeURIComponent(tag), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchEventsByCategory = (category, eventId) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-category/" + encodeURIComponent(category) + "/" + encodeURIComponent(eventId));
  dispatch({
    type: FETCH_EVENTS_BY_CATEGORY,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/search-events-by-category/" + encodeURIComponent(category) + "/" + encodeURIComponent(eventId), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchAllRegions = () => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL + "/regions-all");
  dispatch({
    type: FETCH_ALL_REGIONS,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL + "/regions-all", method: "GET", json: res.data }
      }
    }
  });
}

export const fetchEventBySlug = (slug) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_V2 + "/event/" + encodeURIComponent(slug));
  dispatch({
    type: FETCH_EVENT_BY_SLUG,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_V2 + "/event/" + encodeURIComponent(slug), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchNews = () => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_WEB + "/news");
  dispatch({
    type: FETCH_NEWS,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_WEB + "/news", method: "GET", json: res.data }
      }
    }
  });
}

export const fetchNewsBySlug = (slug) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_WEB + "/news-item/" + encodeURIComponent(slug));
  dispatch({
    type: FETCH_NEWS_BY_SLUG,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_WEB + "/news-item/" + encodeURIComponent(slug), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchNewsByTag = (tag) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_WEB + "/search-news-by-tag/" + encodeURIComponent(tag));
  dispatch({
    type: FETCH_NEWS_BY_TAG,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_WEB + "/search-news-by-tag/" + encodeURIComponent(tag), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchOpportunities = () => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_WEB + "/opportunities");
  dispatch({
    type: FETCH_OPPORTUNITIES,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_WEB + "/opportunities", method: "GET", json: res.data }
      }
    }
  });
}

export const fetchOpportunityBySlug = (slug) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_WEB + "/opportunities-item/" + encodeURIComponent(slug));
  dispatch({
    type: FETCH_OPPORTUNITY_BY_SLUG,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_WEB + "/opportunities-item/" + encodeURIComponent(slug), method: "GET", json: res.data }
      }
    }
  });
}

export const fetchOpportunitiesByTag = (tag) => async dispatch => {
  const res = await axios.get(process.env.REACT_APP_FEED_URL_WEB + "/search-opportunities-by-tag/" + encodeURIComponent(tag));
  dispatch({
    type: FETCH_OPPORTUNITIES_BY_TAG,
    payload: res.data,
    meta: {
      offline: {
        effect: { url: process.env.REACT_APP_FEED_URL_WEB + "/search-opportunities-by-tag/" + encodeURIComponent(tag), method: "GET", json: res.data }
      }
    }
  });
}

export const toggleLoading = (flag) => async dispatch => {
  dispatch({ type: TOGGLE_LOADING, payload: flag });
}
