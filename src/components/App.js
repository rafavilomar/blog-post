import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from "../containers/Post";
import Tasks from "../containers/Tasks";
import Users from "../containers/Users";
import Header from "./layouts/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/post/:key" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
