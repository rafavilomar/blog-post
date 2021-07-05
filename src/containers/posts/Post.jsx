import React, { useEffect, useState } from "react";
import '../../assets/styles/containers/posts.scss'
import { connect } from "react-redux";
import {
  getPosts,
  setErrorPosts,
  setLoadingPosts,
} from "../../actions/posts_actions";
import { getPost_API, getUsersById_API } from "../../fetch";

import Fatal from "../../components/layouts/Fatal";
import Spinner from "../../components/layouts/Spinner";
import UserCard from "../../components/users/UserCard";
import Header from "../../components/layouts/Header";
import Comment from "../../components/posts/Comment";

const Post = ({ match }) => {

  const [post, setPost] = useState()
  const [comments, setComments] = useState([])
  const [user, setUser] = useState()

  const handlePost = async () => {
    let response = await getPost_API(match.params.key)
    setPost(response.data[0])
    handleUser(response.data[0].userId)
  }

  const handleUser = async (id) => {
    let response = await getUsersById_API(id)
    setUser(response.data[0])
  } 

  useEffect( () => {
    handlePost()
  }, [])

  return (
    <>
      <Header />
      <div className="postDetails">
        <section className="post">
          <h3 className="post__title">{post && post.title}</h3>
          <div className="post__image" ></div>
          <p className="post__content">{post && post.body}</p>
          <section>
            <div className="comment__head">
              <h5>Comments</h5>
            </div>
            <div className="comment__list">
              <Comment name={user && user.name} body='' />
            </div>
          </section>
        </section>
        <section className="user">
          <UserCard user={user && user} />
        </section>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
