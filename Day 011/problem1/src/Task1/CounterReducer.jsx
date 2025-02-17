import React from "react";
import { useReducer } from "react";
import Counter from "./Counter";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByValue":
      return { count: state.count + action.payload };
    case "decrementByValue":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Counter count={state.count} dispatch={dispatch} />
    </div>
  );
};

export default CounterReducer;
