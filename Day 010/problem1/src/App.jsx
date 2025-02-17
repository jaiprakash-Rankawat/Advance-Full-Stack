// import React from "react";
// import Component1 from "./DrillingInAction/Component1";
// // import Component1 from "./PropDrilling/Component1";
// import { createContext } from "react";

// export const data = createContext();
// const App = () => {
//   const name = "Radha Rani";
//   return (
//     <div>
//       {/* <Component1 name={name} /> */}
//       <div className="Drilling_in_Action">
//         <data.Provider value={name}>
//           <Component1 />
//         </data.Provider>
//       </div>
//     </div>
//   );
// };

// export default App;

// Code for useContext

// import React from "react";
// import { createContext } from "react";
// import Component1 from "./Use_Context/Component1";
// import UserContex from "./Task1/UserContex";

// export const data1 = createContext();
// export const data2 = createContext();
// const App = () => {
//   const name = "Radha Rani";
//   const age = 23;
//   return (
//     <div>
//       <data1.Provider value={name}>
//         <data2.Provider value={age}>
//           <Component1 />
//         </data2.Provider>
//       </data1.Provider>
//       <UserContex />
//     </div>
//   );
// };

// export default App;

import React from "react";
import UserProvider from "./Task1/UserContext";
import UserProfile from "./Task1/UserProfile";
import UpdateUser from "./Task1/UpdateUser";
const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
};

export default App;
