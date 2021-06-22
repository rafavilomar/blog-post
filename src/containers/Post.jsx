import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users_actions";
import { getPosts } from "../actions/posts_actions";
import { getPost_API, getUsers_API } from "../fetch";

const Post = ({ match, users = [], getUsers, posts = [], getPosts }) => {
  const checkUsers = async () => {
    if (users.length > 0) {
      let responsePosts = await getPost_API(users[match.params.key].id);
      getPosts(responsePosts.data);
    } else {
      let responseUsers = await getUsers_API();
      getUsers(responseUsers.data);
      let responsePosts = await getPost_API(
        responseUsers.data[match.params.key].id
      );
      getPosts(responsePosts.data);
    }
  };

  useEffect(async () => {
    await checkUsers();
  }, []);

  useEffect(() => {
    return () => {
      getPosts([]);
    };
  }, []);

  return posts.map((post) => <p>{`${post.title} - ${post.userId}`}</p>);
};

const mapStateToProps = (state) => {
  return {
    users: state.users_reducers.users,
    posts: state.posts_reducers.posts,
  };
};

const mapDispatchToProps = {
  getUsers,
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
