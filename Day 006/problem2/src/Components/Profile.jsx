import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({ name: "Radha", age: 22 });
  return (
    <div>
      <h1>Profile</h1>
      <label htmlFor="ChangeName">Update Name</label>
      <input
        type="text"
        id="ChangeName"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="ChangeAge">Update Age</label>
      <input
        type="text"
        id="ChangeAge"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <br />
      <br />
      <h2>Name : {user.name}</h2>
      <h2>Age : {user.age}</h2>
    </div>
  );
};

export default Profile;
