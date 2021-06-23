import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Table = ({ users = [] }) => {
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
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                {" "}
                <Link to={`post/${user.id}`}>
                  <div className="eye-solid icon"></div>{" "}
                </Link>{" "}
              </td>
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

export default connect(mapStateToProps, null)(Table);
