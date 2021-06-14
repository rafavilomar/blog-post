import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users_actions";

const Table = ({ users, getUsers }) => {
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
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
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
