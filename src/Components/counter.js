import { useEffect, useState } from "react";
import { store } from "../store/store";
import { decrement, increment } from "../store/actions/counterAction.js";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onIncrement = () => {
    store.dispatch(increment());
  };
  const onDecrement = () => {
    store.dispatch(decrement());
  };
  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  }, []);

  const updateState = () => {
    const state = store.getState();
    setCounter(state.counter);
  };
  return (
    <div>
      <h2>Counter</h2>
      <div>{counter}</div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
};
export default Counter;
