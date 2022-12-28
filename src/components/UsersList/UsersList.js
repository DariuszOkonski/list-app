import React, { useState } from "react";
import UsersListOneItem from "./UsersListOneItem";
import "./UsersList.css";

export default function UsersList(props) {
  const [list, setList] = useState([...props.users]);

  const removeItem = (userName) => {
    setList((list) => list.filter((user) => user.username !== userName));
  };

  return (
    <>
      <h3>Number of users: {list.length}</h3>
      <ul className="UsersList">
        {[...list]
          .sort((a, b) => a.username.localeCompare(b.username))
          .map((userObj) => (
            <UsersListOneItem
              key={userObj.username}
              user={userObj}
              onRemoveItem={removeItem}
            />
          ))}
      </ul>
    </>
  );
}
