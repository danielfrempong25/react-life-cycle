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
      .then((users) => {
        console.log("users:", users);
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <hr />
        <div>
          {this.state.users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
