import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUsers, setError, setLoading } from "../../actions/users_actions";

const Table = ({
  users = [],
  getUsers,
  loading,
  setLoading,
  setError,
  error,
}) => {
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (err) {
      await setError(err.message);
      console.error("ERROR: " + error);
    }
  };

  useEffect(async () => {
    getUsers(await getData());
  }, []);

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users_reducers.users,
    loading: state.users_reducers.loading,
    error: state.users_reducers.error,
  };
};

const mapDispatchToProps = {
  getUsers,
  setLoading,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
