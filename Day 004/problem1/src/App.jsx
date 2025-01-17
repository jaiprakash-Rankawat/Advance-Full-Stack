import React from "react";
import ConditionalRendring from "./Components/ConditionalRendring";
import Items from "./Components/Items";
import Weather from "./Task1/Weather";
import UserStatus from "./Task1/UserStatus";
import Greeting from "./Task1/Greeting";
const App = () => {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {/* based on different conditions output will be different */}
      {/* Example 1  */}
      <ConditionalRendring isValid={true} />
      <ConditionalRendring isValid={false} />

      <hr />

      {/* Example 2 */}
      <Items
        product={[
          "Mobile",
          "Laptop",
          "Tablet",
          "Computer",
          "Printer",
          "Scanner",
        ]}
      />
      <hr />
      {/* Task 1 */}
      <h1 style={{ textAlign: "center" }}>Task 1</h1>
      <Weather temperature={10} />
      <hr />
      {/* Task 1 2nd Component */}
      <h1 style={{ textAlign: "center" }}>User Status</h1>
      <UserStatus loggedIn={true} isAdmin={true} />

      <hr />

      {/* Task 1 3rd Component */}
      <h1 style={{ textAlign: "center" }}>Greeting</h1>
      <Greeting timeOfDay="morning" />
    </div>
  );
};

export default App;
