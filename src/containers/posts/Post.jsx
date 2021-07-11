import React, { useEffect, useState } from "react";
import "../../assets/styles/containers/posts.scss";
import { connect } from "react-redux";
import {
  getComments,
  setErrorComments,
  setLoadingComments,
} from "../../actions/comments_actions";
import {
  getCommentsByPost_API,
  getPost_API,
  getUsersById_API,
} from "../../fetch";

//COMPONENTS
import Fatal from "../../components/layouts/Fatal";
import Spinner from "../../components/layouts/Spinner";
import UserCard from "../../components/users/UserCard";
import Header from "../../components/layouts/Header";
import Comment from "../../components/posts/Comment";

const Post = ({
  match,
  comments = [],
  getComments,
  loading,
  error,
  setErrorComments,
  setLoadingComments,
}) => {
  const [post, setPost] = useState();
  const [user, setUser] = useState();

  const handlePost = async () => {
    let response = await getPost_API(match.params.key);
    setPost(response.data[0]);
    handleUser(response.data[0].userId);
  };

  const handleUser = async (id) => {
    let response = await getUsersById_API(id);
    setUser(response.data[0]);
  };

  const handleComments = async () => {
    setLoadingComments(true);
    let response = await getCommentsByPost_API(match.params.key);
    response.data ? getComments(response.data) : setErrorComments(response.err);
    // console.log(response.data);
  };

  useEffect(() => {
    handlePost();
    handleComments();
  }, []);

  return (
    <>
      <Header />
      <div className="postDetails">
        <section className="post">
          <h3 className="post__title">{post && post.title}</h3>
          <div className="post__image"></div>
          <p className="post__content">{post && post.body}</p>
          <section>
            <div className="comment__head">
              <h5>Comments</h5>
            </div>
            <div className="comment__list">
              {console.log(comments, loading, error)}
              {loading ? (
                <Spinner />
              ) : error.error ? (
                <Fatal error={error.message} />
              ) : (
                comments.map((comment, key) => (
                  <Comment
                    key={key}
                    name={user && user.name}
                    body={comment.body}
                  />
                ))
              )}
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
  console.log(state);
  return {
    comments: state.comments_reducers.comments,
    error: state.comments_reducers.error,
    loading: state.comments_reducers.loading,
  };
};

const mapDispatchToProps = {
  getComments,
  setErrorComments,
  setLoadingComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
