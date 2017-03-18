import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import SimpleForm from "./components/SimpleForm.js";
import colors from "./components/colors";
import {ping, postFeedback} from "./actions";

const showResults = (values, dispatch) =>
  new Promise(resolve => {
      console.error("Going to dispatch");
      dispatch(ping());
      console.error("Dispatched");
      setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
          resolve();
      }, 500);
  });

//passed onSubmit gets wrapped into handleSubmit prop
let App = ({ dispatch }) => (
    <ThemeProvider theme={{ color: "mediumseagreen" }}>
        <SimpleForm onSubmit={(values)=>showResults(values, dispatch)} />
    </ThemeProvider>
        );


App.propTypes = {
    dispatch: PropTypes.func.isRequired
};
App = connect()(App);
export default App;
