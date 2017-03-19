import React from "react";
import { ThemeProvider } from "styled-components";

import SimpleForm from "./components/SimpleForm";
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
//callback will be passed arguments values, dispatch, props (SimpleForm's props)
let App = () => (
    <ThemeProvider theme={{ color: "mediumseagreen" }}>
        <SimpleForm onSubmit={(values, dispatch) => dispatch(postFeedback(values))} />
    </ThemeProvider>
);

export default App;
