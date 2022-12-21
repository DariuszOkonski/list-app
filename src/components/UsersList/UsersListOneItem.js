import React from "react";
import "./UsersListOneItem.css";

export default function UsersListOneItem({ user }) {
  return (
    <li key={user.username} className="UsersListOneItem">
      <img
        className="UsersListOneItem__photo"
        src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${user.picture}`}
        alt={`Photo of ${user.first_name}`}
      />
      <span>
        {user.first_name} {user.last_name}
      </span>
      {/* <span>- {user.username}</span> */}
    </li>
  );
}
