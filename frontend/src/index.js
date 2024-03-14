import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "pages";
import "./index.css";
import "antd/dist/antd.css";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
