import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./containers/store";
import {ping} from "./actions"
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root")
);

// initial state load dispatch would be most appropriate to put here.
store.dispatch(ping());
