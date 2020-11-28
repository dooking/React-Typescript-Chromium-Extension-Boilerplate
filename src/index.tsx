// index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "../public/index.css";

const app = document.createElement("div");
app.id = "my-extension";
document.body.appendChild(app);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "click") {
//     toggle();
//   }
// });

// function toggle() {
//   if (app.style.display === "none") {
//     app.style.display = "block";
//   } else {
//     app.style.display = "none";
//   }
// }

ReactDOM.render(<App />, app);
