import React from "react";

const ConditionalRendring = ({ isValid }) => {
  return (
    <div>
      <h3>{isValid ? " 👍 Valid Password" : "👎 Invalid Password"}</h3>
    </div>
  );
};

export default ConditionalRendring;
