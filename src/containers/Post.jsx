import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getPosts,
  setErrorPosts,
  setLoadingPosts,
} from "../actions/posts_actions";
import { getPost_API } from "../fetch";

import Fatal from "../components/layouts/Fatal";
import Spinner from "../components/layouts/Spinner";

const Post = ({
  match,
  posts = [],
  getPosts,
  error,
  loading,
  setLoadingPosts,
  setErrorPosts,
}) => {
  const [userId, setUserId] = useState(match.params.key);

  const checkUsers = async () => {
    setLoadingPosts(true);
    let responsePosts = await getPost_API(userId);
    responsePosts.data
      ? getPosts(responsePosts.data)
      : setErrorPosts(responsePosts.err);
  };

  const cleaningStates = () => {
    getPosts([]);
    setUserId(null);
  };

  useEffect(() => {
    checkUsers();
  }, []);

  useEffect(() => {
    return cleaningStates();
  }, []);

  return loading ? (
    <Spinner />
  ) : error.error ? (
    <Fatal error={error.message} />
  ) : (
    posts.map((post, key) => (
      <p key={key}>{`${post.title} - ${post.userId}`}</p>
    ))
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts_reducers.posts,
    error: state.posts_reducers.error,
    loading: state.posts_reducers.loading,
  };
};

const mapDispatchToProps = {
  getPosts,
  setErrorPosts,
  setLoadingPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
