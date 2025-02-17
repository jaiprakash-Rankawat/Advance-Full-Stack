import React from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
const UpdateUser = () => {
  const { updateName } = useContext(UserContext);
  const [name, setName] = useState("");
  const handleUpdate = () => {
    updateName(name);
    setName("");
  };
  return (
    <div>
      <div>
        <h1>Update User</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateUser;
