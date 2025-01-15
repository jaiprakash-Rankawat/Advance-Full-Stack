# Day 2: JSX in React

- What is JSX
- Writing JSX
- JSX Challenges
- JSX Rules
- JSX Rules Challenge
- Expressions in JSX
- Embedding Dynamic Content
- Embedding Dynamic Content Challenge
- Lists in React.js
- Rendering Lists of Data
- Rendering Lists of Data Challenges

# What is JSX

- JSX is a syntax extension for JavaScript that allows you to write HTML-like code in a JavaScript file.

# Writing JSX

```jsx
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>Tag for paragraph</p>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
```

# JSX challenges

- Solve Task1.md
- ### Answer Available in `WelcomeMessage.jsx` file.

# JSX Rules

1. jsx must be written inside a single element.
2. jsx elements must be closed.
3. class is changed to className and for is changed to htmlFor.

# JSX Rules Challenge

- solve Task2.md
- ### Answer Available in `JSXRules.jsx` file.

# Expressions in JSX

- with JSX, you can include expressions in your JSX by enclosing them in curly braces `{}`.
- JSX expressions are evaluated at runtime and their result is inserted into the JSX as a string.

```jsx
import React from "react";

const Expressions = () => {
  const name = "Radha";
  const age = 20;
  return (
    <div>
      <h1>Expressions</h1>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>2 + 2 = {2 + 2}</h3>
    </div>
  );
};

export default Expressions;
```

- Supported JavaScript Expressions:
  1. Variables: {variable}
  2. Functions: {someFunction()}
  3. Mathematical operations: {1 + 2}
  4. Conditional expressions (ternary operator): {isLoggedIn ? 'Welcome' : 'Please log in'}

# Embedding Dynamic Content

```jsx
const Expressions = () => {
  const name = "Radha";
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};
```

- This name can be changed dynamically and the JSX will be updated to reflect the changed name.

```jsx
const Expressions = () => {
  const name = "Radha Rani";
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};
```

# Embedding Dynamic Content Challenge

- solve Task3.md
- ### Answer Available in `Greeting.jsx` and `ProductInfo.jsx` file.

# Lists in React.js

- Lists are used to display a collection of items in a user interface.
- Lists can be rendered using the `map` method.

# Rendering Lists of Data

```jsx
import React from "react";

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

# Rendering Lists of Data Challenges

- solve Task4.md
- ### Answer Available in `UserList.jsx` and `ProductList.jsx` file.
