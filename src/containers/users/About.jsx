import React, { useEffect, useState } from "react";

//COMPONENTS
import Header from "../../components/layouts/Header";
import Tab from "../../components/users/Tab";

const About = ({ match }) => {
  useEffect(() => console.log(match));
  return (
    <>
      <Header />
      <div className="container">
        <Tab active={match.params.tab} user={match.params.user} />
      </div>
    </>
  );
};
export default About;
