import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

async function subscribe() {
  if ("serviceWorker" in navigator) {
    let sw = await navigator.serviceWorker.ready;
    // request a push manager to receive notifications by pop up dialog
    if (sw.pushManager) {
      let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BJWActt-6ZsOSol4qlJGVgJs8giItG_YQ_I_bDIxpFyz5Qb9Ea-mAemiUabUm7Obch8HkLugi5qw9IxGeEPqTJ4",
      });
      console.log("Subscription object: ", JSON.stringify(push));
    }
  }
}

subscribe();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
