/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersFunction() {
  const [users, setUsers] = useState([]);

  const userInfo = async () => {
    try {
      let getData = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(getData.data);
      setUsers(getData.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      <h1>Users Function</h1>
      <div className="grid">
        {users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UsersFunction;
