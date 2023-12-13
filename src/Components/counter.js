import { useEffect, useState } from "react";
import { store } from "../store/store";
import { decrement, increment } from "../store/actions/counterAction.js";
import "./counter.css";

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
    <div className="main">
      <h2 className="heading">Counter</h2>
      <br />
      <div className="text">{counter}</div>
      <br />
      <div className="buttons">
        <button onClick={onIncrement} className="increase_btn">
          increment
        </button>
        <button onClick={onDecrement} className="decrease_btn">
          decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;
