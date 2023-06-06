import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserFunction() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const api = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await api.data;
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <hr />
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
