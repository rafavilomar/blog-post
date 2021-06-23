import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "../components/users/Table";
import { getUsers, setError, setLoading } from "../actions/users_actions";

import "../assets/styles/spinner.css";
import Spinner from "../components/layouts/Spinner";
import Fatal from "../components/layouts/Fatal";
import { getUsers_API } from "../fetch";

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
      let response = await getUsers_API();
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
    <Table />
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
