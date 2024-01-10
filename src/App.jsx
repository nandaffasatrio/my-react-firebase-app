// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ListProperty from "./pages/ListProperty";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);
  };

  const handleRegisterSuccess = (user) => {
    setLoggedInUser(user);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">{!loggedInUser && <Login onLoginSuccess={handleLoginSuccess} />}</Route>
          <Route path="/register">{!loggedInUser && <Register onRegisterSuccess={handleRegisterSuccess} />}</Route>
          <Route path="/properties">{loggedInUser && <ListProperty />}</Route>
          <Route path="/profile">{loggedInUser && <Profile />}</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
