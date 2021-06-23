import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users_actions";
import { getPosts } from "../actions/posts_actions";
import { getPost_API, getUsers_API } from "../fetch";

const Post = ({ match, users = [], getUsers, posts = [], getPosts }) => {
  const [userId, setUserId] = useState(match.params.key)

  const checkUsers = async () => {
    // let user = await users.find(e => e.id == match.params.key)
    // console.log(user && user.id);
    // console.log(users.length);
    // if (users.length > 0) {
    //   let responsePosts = await getPost_API(getUserById().id);
    //   getPosts(responsePosts.data);
    // } else {
    //   //console.log('else');
    //   //let responseUsers = await getUsers_API();
    //   //getUsers(responseUsers.data);
    //   let responsePosts = await getPost_API(userId
    //     //await responseUsers.data.find(e => e.id == match.params.key)
    //   );
    //   getPosts(responsePosts.data);
    //   //console.log( await (await getPost_API(userId)).data);
    //   //console.log(responsePosts.data);
    // }
    let responsePosts = await getPost_API(userId)
    getPosts(responsePosts.data);
    
  };

  useEffect(async () => {
    await checkUsers();
    //console.log(users.find(e => e.id == match.params.key))
  }, []);

  useEffect(() => {
    return () => {
      getPosts([]);
      setUserId(null)
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
