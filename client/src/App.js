import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import FeedbackIzzle from 'feedbackizzle'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <FeedbackIzzle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/room/:id" component={Room} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
