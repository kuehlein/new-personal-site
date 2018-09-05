import React from "react";
import "./App.css";

import { Home } from "../";

const App = () => (
  <div className="background orientation">
    <Home />
  </div>
);

export default App;

/*
 * In the future when more views are available,
 * this component will serve as a parent to all views.
 */
