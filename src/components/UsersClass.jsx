/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ users: data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  render() {
    return (
      <>
        <h1>Users Class</h1>
        <div className="grid">
          {this.state.users.map((user) => (
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
}
