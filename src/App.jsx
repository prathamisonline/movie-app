import React from "react";
import ReactDOM from "react-dom/client";

import SearchMovie from "./Component/SearchMovie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <h1 className="container">Movie Search</h1>
      <SearchMovie />
    </div>
  </React.StrictMode>
);
