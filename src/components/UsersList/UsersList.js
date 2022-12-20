import React from "react";
import UsersListOneItem from "./UsersListOneItem";

export default function UsersList(props) {
  return (
    <ul>
      {props.users.map((userObj) => (
        <UsersListOneItem key={userObj.username} user={userObj} />
      ))}
    </ul>
  );
}
