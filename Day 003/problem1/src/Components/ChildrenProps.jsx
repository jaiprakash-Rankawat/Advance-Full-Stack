import React from "react";

// 1. method
const ChildrenProps = (props) => {
  return (
    <div>
      <h1>Children Props</h1>
      {props.children}
    </div>
  );
};

// 2. method
// const ChildrenProps = ({children}) => {
//   return (
//     <div>
//         <h1>Children Props</h1>
//         {children}
//     </div>
//   )
// }

export default ChildrenProps;
