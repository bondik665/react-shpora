import { useState } from "react";

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
