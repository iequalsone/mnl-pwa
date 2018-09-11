import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(reduxThunk),
    offline(offlineConfig)
  )
);

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
