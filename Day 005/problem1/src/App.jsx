import React from "react";
import Inline from "./Components/Inline";
import Internal from "./Components/Internal";
import External from "./Components/External";
import StyleCard from "./Task1/StyleCard";
import ProfileCard from "./Task1/ProfileCard";
import IconComponent from "./Task1/IconComponent";
import "./App.css";
const App = () => {
  return (
    <div>
      <Inline />
      <Internal />
      <External />

      {/* Task 1 Starts from here */}
      <StyleCard />
      <hr />
      <ProfileCard />
      <hr />
      <IconComponent />
    </div>
  );
};

export default App;
