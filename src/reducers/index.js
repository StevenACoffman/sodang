/*jshint esnext:true */

import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducers = combineReducers({
    form: reduxFormReducer // mounted under "form"
});

export default reducers;
