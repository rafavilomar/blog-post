import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//VIEWS
import Home from "../containers/Home"
import Post from "../containers/posts/Post";
import Tasks from "../containers/Tasks";
import Users from "../containers/Users";
import About from "../containers/users/About.jsx";
import AllPosts from "../containers/posts/AllPosts";
import UserPosts from "../containers/users/UserPosts";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/about/:user/:tab" component={About} />
        <Route exact path="/posts/:user/:tab" component={UserPosts} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/posts/" component={AllPosts} />
        <Route exact path="/posts/:key" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
