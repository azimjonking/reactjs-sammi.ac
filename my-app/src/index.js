import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const el = <h1>Hello world</h1>;
// const el = React.createElement("h1", null, "Hello world");

const name = "Azimjon";

const el = (
  <div>
    <h1 className="greeting" tabIndex={1}>
      Hello: {name}
    </h1>
    <input type="text" />
    <button>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(el);
