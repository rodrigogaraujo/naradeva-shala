import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Global from "./theme/globalStyle";
import Routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes />
      <Global />
    </Router>
  );
}

export default App;
