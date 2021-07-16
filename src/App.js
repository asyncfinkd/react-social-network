import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexNotLoggedPages from "./pages/indexNotLogged/IndexNotLoggedPages";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={IndexNotLoggedPages} />
      </Router>
    </>
  );
}

export default App;
