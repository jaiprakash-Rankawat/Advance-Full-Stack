# Day 9: useEffect Hook

- What is useEffect
- useEffect in Action
- useEffect Challenges

# What is useEffect

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

# useEffect in Action

1.
