import React, { useEffect, useState } from "react";
import "../../assets/styles/containers/users.scss";
import { getUsersById_API } from "../../fetch";

//COMPONENTS
import Header from "../../components/layouts/Header";
import SectionAbout from "../../components/users/SectionAbout";
import Tab from "../../components/users/Tab";
import UserCard from "../../components/users/UserCard";
import UserField from "../../components/users/UserField";

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
      {user && (
        <div className="container userDetails">
          <UserCard user={user} />
          <div >
            <Tab active={match.params.tab} user={match.params.user} />
            <div className="userDetails__content">
            <SectionAbout>
              <UserField title="Phone number" info={user.phone} />
              <UserField title="Email" info={user.email} />
              <UserField title="Website" info={user.website} />
            </SectionAbout>
            <SectionAbout title='Address' >
              <UserField title="City" info={user.address.city} />
              <UserField title="Street" info={user.address.street} />
            </SectionAbout>
            <SectionAbout title='Company' >
              <UserField title="Name" info={user.company.name} />
              <UserField title="BS" info={user.company.bs} />
              <UserField title="Catch Phrase" info={user.company.catchPhrase} />
            </SectionAbout>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default About;
