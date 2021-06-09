import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    setUser([
      {
        name: "Rafael",
        email: "rafavilomar@gmial.com",
        link: "rafavilomar.vercel.app",
      },
      {
        name: "Rafael",
        email: "rafavilomar@gmial.com",
        link: "rafavilomar.vercel.app",
      },])
  },[])

  return (
    <div className="margin">
      {console.log(users)}
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
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
