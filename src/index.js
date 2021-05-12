import React from "react";
import ReactDOM from "react-dom";
import { GoodMorning } from "./components/GoodMorning";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const myAge=41;

const parentName = "Nikolas";

function App(props) {
  //ReactDOM.render(< GoodMorning name={parentName} />, document.getElementById("root"));
  ReactDOM.render(React.createElement(GoodMorning, {name: parentName}) , document.getElementById("root"));
}

setInterval(App, 30000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
