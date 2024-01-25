import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersLayout = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <Link to={`/users/${user.id}`} key={user.id}>
              <li>{user.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersLayout;
