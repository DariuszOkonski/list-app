import React from "react";

export default function UsersListOneItem({ user }) {
  return (
    <li>
      <strong>
        {user.first_name} {user.last_name}
      </strong>
      <span>- {user.username}</span>
      <img
        src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${user.picture}`}
        alt=""
      />
    </li>
  );
}
