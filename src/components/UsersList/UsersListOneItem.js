import React from "react";

export default function UsersListOneItem({ user }) {
  return (
    <li>
      <strong>
        {user.first_name} {user.last_name}
      </strong>
      {user.username}
    </li>
  );
}
