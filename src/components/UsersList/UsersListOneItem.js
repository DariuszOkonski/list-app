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
      <div className="UsersListOneItem__text">
        <p className="UsersListOneItem__name">
          {user.first_name} {user.last_name}
        </p>
        <p className="UsersListOneItem__username">{user.username}</p>
      </div>
      {/* <span>- {user.username}</span> */}
    </li>
  );
}
