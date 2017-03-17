import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Provider} from "react-redux";
import SimpleForm from "./components/SimpleForm.js";
import store from "./containers/store";
import { ThemeProvider } from "styled-components";
import colors from "./components/colors";

const showResults = values =>
  new Promise(resolve => {
      setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
          resolve();
      }, 500);
  });

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={{ color: "mediumseagreen" }}>
                    <div className="app">
                        <h2>Form</h2>
                        <SimpleForm onSubmit={showResults}/>

                    </div>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
