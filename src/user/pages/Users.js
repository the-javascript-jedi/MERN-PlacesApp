import React from "react";
import UsersList from "../components/UsersList/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      places: 3,
    },
    {
      id: "u2",
      name: "Nithin",
      image:
        "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
