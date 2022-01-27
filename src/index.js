import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import { store } from "./providers/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
