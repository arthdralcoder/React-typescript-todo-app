import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Dynamically add the Font Awesome CDN link
const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
