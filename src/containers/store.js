/*eslint no-console: "off"*/
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics/index";

import createLogger from "redux-logger";
import rootReducer from "../reducers/index";

const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = [epicMiddleware];

//const middleware = [];
if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);
}

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
