import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexNotLoggedPages from "./pages/indexNotLogged/IndexNotLoggedPages";
import IndexNotLoggedLoginPages from "./pages/indexNotLogged/login/IndexNotLoggedLoginPages";
import IndexNotLoggedSignupPages from "./pages/indexNotLogged/signup/IndexNotLoggedSignupPages";

function App() {
  return (
    <>
      <div className="loading-spinner"></div>
      <Router>
        {localStorage.getItem("logged") === "true" ? (
          <Route path="/" exact>
            hi
          </Route>
        ) : (
          <Route path="/" exact component={IndexNotLoggedPages} />
        )}
        <Route path="/login" exact component={IndexNotLoggedLoginPages} />
        <Route path="/signup" exact component={IndexNotLoggedSignupPages} />
      </Router>
    </>
  );
}

export default App;
