import React, { useEffect } from "react";
import "../assets/styles/containers/users.scss";
import { connect } from "react-redux";
import { getUsers, setError, setLoading } from "../actions/users_actions";
import { getAllUsers_API } from "../fetch";

import Spinner from "../components/layouts/Spinner";
import Fatal from "../components/layouts/Fatal";
import UserCard from "../components/users/UserCard";

const Users = ({
  loading,
  getUsers,
  setLoading,
  setError,
  error,
  users = [],
}) => {
  const handleUsers = async () => {
    if (users.length === 0) {
      setLoading(true);
      let response = await getAllUsers_API();
      response.data ? getUsers(response.data) : setError(response.err);
    }
  };
  useEffect(() => {
    handleUsers();
  }, []);

  return loading ? (
    <Spinner />
  ) : error.error ? (
    <Fatal error={error.message} />
  ) : (
    <div className="users">
      <section className="usersList">
        {[1, 1, 1, 1, 1, 1].map((e, key) => (
          <UserCard key={key} />
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users_reducers.users,
    error: state.users_reducers.error,
    loading: state.users_reducers.loading,
  };
};

const mapDispatchToProps = {
  getUsers,
  setLoading,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
