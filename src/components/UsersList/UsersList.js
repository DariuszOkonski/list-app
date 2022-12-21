import React from "react";
import UsersListOneItem from "./UsersListOneItem";
import "./UsersList.css";

export default function UsersList(props) {
  return (
    <ul className="UsersList">
      {[...props.users]
        .sort((a, b) => a.username.localeCompare(b.username))
        .map((userObj) => (
          <UsersListOneItem key={userObj.username} user={userObj} />
        ))}
    </ul>
  );
}
