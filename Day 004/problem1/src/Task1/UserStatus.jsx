import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn && isAdmin && <h4>Welcome Admin!</h4>}
      {loggedIn && !isAdmin && <h4>Welcome User!</h4>}
    </div>
  );
};

export default UserStatus;
