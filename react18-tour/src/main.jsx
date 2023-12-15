import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root"), {
  // Specifying a shared prefix for all generated IDs
  identifierPrefix: "my-first-app-",
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
