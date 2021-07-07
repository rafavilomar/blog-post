import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layouts/Header";

//VIEWS
import Home from "../containers/Home"
import Post from "../containers/posts/Post";
import Tasks from "../containers/Tasks";
import Users from "../containers/Users";
import About from "../containers/users/About.jsx";
import AllPosts from "../containers/posts/AllPosts";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/:user/:tab" component={About} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/posts/" component={AllPosts} />
        <Route exact path="/posts/:key" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
