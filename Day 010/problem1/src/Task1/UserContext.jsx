import React, { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [name, setName] = useState("Radha Rani");
  const updateName = (name) => {
    setName(name);
  };
  return (
    <div>
      <UserContext.Provider value={{ name, updateName }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
