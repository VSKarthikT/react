import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "Heading" }, "exact thing"),
    React.createElement("h2", { id: "Heading2" }, "h2 tag in react"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
