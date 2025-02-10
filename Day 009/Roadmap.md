# Day 9: useEffect Hook

- 1️⃣ What is useEffect
- 2️⃣ useEffect in Action
- 3️⃣ Important Information
- 4️⃣ fetching Data
- 5️⃣ useEffect Challenges

- Bonus Topics :
- 1. Synchronous vs Asynchronous
- 2.

# 1️⃣ What is useEffect

`useEffect` is a React Hook that allows you to perform side effects in function components. It is used to handle things like:

- Fetching data from an API
- Updating the DOM (e.g., setting document title)
- Subscribing to events
- Managing timers (setTimeout, setInterval)

- ### Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // Side effect logic here
});
```

- ### Types of useEffect Usage

1. #### Running on Every Render (No Dependencies)

```jsx
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered!");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

2. #### Running Only on Mount (Empty Dependencies [])

- In this case, the `useEffect` hook will only run when the component mounts, and will not re-run when the component re-renders.

```jsx
useEffect(() => {
  console.log("Component Mounted!");

  return () => {
    console.log("Component Unmounted!");
  };
}, []);
```

3. #### Running on State or Prop Change

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

# 2️⃣ useEffect in Action

- ## Detail Explaination given in `UseEffect1.jsx` and `UseEffect2.jsx`

# 3️⃣ Important Information

- we can not provide useEffect in conditional statement but inside useEffect we can do that
- ### Detail Explaination given in `UseEffect3.jsx`

# 4️⃣ Fetching Data

- ### Detail Explaination given in `UseEffect4.jsx`

# 5️⃣ useEffect Challenges

- ### solve `Task1.md`
