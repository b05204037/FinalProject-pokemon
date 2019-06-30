import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Game from "./containers/Game";
import Fight from "./containers/Fight";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/Game" component={Game} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
