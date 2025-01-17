import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };
  return (
    <div style={styles}>
      <h1>Profile Card</h1>
      <p>Profile Card with Separate Style Object</p>
    </div>
  );
};

export default ProfileCard;