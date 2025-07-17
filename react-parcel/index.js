import React from "react";
import ReactDOM from "react-dom/client";

const paragraphElement = React.createElement("p",null,"Hello World React day-2");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paragraphElement)