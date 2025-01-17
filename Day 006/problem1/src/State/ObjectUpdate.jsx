import React from "react";
import { useState } from "react";
const ObjectUpdate = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <label htmlFor="ChangeFirstName">First Name</label>
      <input
        type="text"
        id="ChangeFirstName"
        value={user.firstName}
        placeholder="Enter First Name"
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <label htmlFor="ChangeLastName">Last Name</label>
      <input
        type="text"
        id="ChangeLastName"
        value={user.lastName}
        placeholder="Enter Last Name"
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
    </div>
  );
};

export default ObjectUpdate;
