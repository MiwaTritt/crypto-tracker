import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";

import createStore from "./store/createStore";
import "./styles/main.scss";

// Use browserHistory
const history = createHistory();

// Store Initialization
const store = createStore(window.__INITIAL_STATE__);

// App is the entry point to the React code
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
