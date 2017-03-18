import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./containers/store";
import "./index.css";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root")
);


//store.dispatch(fetchListItems("70822"));
