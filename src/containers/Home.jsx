import React, { useEffect } from "react";
import "../assets/styles/containers/home.scss";
import { connect } from "react-redux";
import {
  getPosts,
  setErrorPosts,
  setLoadingPosts,
} from "../actions/posts_actions";
import { getALLPost_API } from "../fetch";

//COMPONENTS
import Header from "../components/layouts/Header";
import Fatal from "../components/layouts/Fatal";
import Spinner from "../components/layouts/Spinner";
import PostCard from "../components/posts/PostCard";

const Home = ({
  posts = [],
  getPosts,
  error,
  loading,
  setLoadingPosts,
  setErrorPosts,
}) => {
  const checkUsers = async () => {
    setLoadingPosts(true);
    let responsePosts = await getALLPost_API();
    responsePosts.data
      ? getPosts(responsePosts.data)
      : setErrorPosts(responsePosts.err);
  };
  useEffect(() => {
    checkUsers();
  }, []);

  return (
    <>
      <Header posts />
      {loading ? (
        <Spinner />
      ) : error.error ? (
        <Fatal error={error.message} />
      ) : (
        <div className="home">
          <section className="postList">
            {posts.slice(0, 9).map((post, key) => (
              <PostCard key={key} post={post} />
            ))}
          </section>
        </div>
      )}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
