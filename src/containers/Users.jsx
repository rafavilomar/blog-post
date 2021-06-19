import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Table from "../components/users/Table";
import { getUsers, setError, setLoading } from "../actions/users_actions";

import "../assets/styles/spinner.css";
import Spinner from "../components/layouts/Spinner";
import Fatal from "../components/layouts/Fatal";

const Users = ({ loading, getUsers, setLoading, setError, error, users }) => {
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.info(response)
      return response.data;
    } catch (err) {
      await setError(err.message);
      console.error("ERROR: " + error.error);
    }
  };

  useEffect(async () => {
    getUsers(await getData());
    console.info(await getData().then(console.info(users)))
    console.info(users)
  }, []);
  return loading ? <Spinner /> : error ? <Fatal error={error.message} /> : <Table  />;
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
