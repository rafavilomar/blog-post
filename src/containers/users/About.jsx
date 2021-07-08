import React, { useEffect, useState } from "react";
import '../../assets/styles/containers/users.scss'

//COMPONENTS
import Header from "../../components/layouts/Header";
import Tab from "../../components/users/Tab";
import UserCard from "../../components/users/UserCard";
import { getUsersById_API } from "../../fetch";

const About = ({ match }) => {
  const [user, setUser] = useState();

  const handleUser = async (id) => {
    let response = await getUsersById_API(match.params.user);
    setUser(response.data[0]);
  };

  useEffect(() => handleUser(), []);
  return (
    <>
      <Header />
      <div className="container userDetails">
        {user && <UserCard user={user} />}
        <div>
        <Tab active={match.params.tab} user={match.params.user} />
        </div>
      </div>
    </>
  );
};
export default About;
