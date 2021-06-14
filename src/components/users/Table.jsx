import React, { useEffect, useState } from "react";
import axios from "axios";
import {connect} from 'react-redux'
import {getUsers} from '../../actions/users_actions'

const Table = ({users, getUsers }) => {
  const [users2, setUser2] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser2(response.data);
  };

  useEffect(() => {
    //getData();
    getUsers([1,2,3,4,5])
  }, []);
  console.log(users)

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
          {users2.map((user) => (
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

const mapStateToProps = state => {
  return {
    users : state
  }
}

const mapDispatchToProps = {
  getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
 