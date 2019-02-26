import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import * as serviceWorker from './serviceWorker';

import "./assets/css/spinner.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/black-dashboard-react.css";

import Firebase, { FirebaseContext } from "./components/Firebase";

console.log("fb initialized");

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
