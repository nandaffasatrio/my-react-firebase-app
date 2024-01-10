// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import ListProperty from "./ListProperty";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/properties" component={ListProperty} />
        <Route path="/login" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
