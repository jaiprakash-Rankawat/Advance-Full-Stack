import React from "react";
import { useState } from "react";
const ArrayUpdate = () => {
  const [friends, setFriends] = useState(["Radha", "Sita"]);
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="Add">Add Friend</label>
      <input type="text" id="Add" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setFriends([...friends, name])}>Add</button>
      <br />
      <br />
      <label htmlFor="Remove">Remove Friend</label>
      <input
        type="text"
        id="Remove"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => setFriends(friends.filter((friend) => friend !== name))}
      >
        Remove
      </button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayUpdate;
