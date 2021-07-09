import React, { useEffect, useState } from "react";
import "../../assets/styles/containers/users.scss";
import { getPostsByUser_API, getUsersById_API } from "../../fetch";

//COMPONENTS
import Header from "../../components/layouts/Header";
import Tab from "../../components/users/Tab";
import UserPost from "../../components/users/UserPost";

const UserPosts = ({ match }) => {
  const [user, setUser] = useState();
  const [posts, setPosts] = userState([])

  const handleUser = async () => {
    let response = await getUsersById_API(match.params.user);
    setUser(response.data[0]);
    handlePost()
  };

  const handlePost = async () => {
    let response = await getPostsByUser_API(match.params.user);
    setPosts(response.data)
  }

  useEffect(() => handleUser(), []);
  return(
    <>
    <Header/>
      {user && (
        <div className="container userDetails">
          <UserCard user={user} />
          <div >
            <Tab active={match.params.tab} user={match.params.user} />
            <div className="userDetails__content">
              {posts.map(post => <UserPost post={post} /> )}
              
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default UserPosts