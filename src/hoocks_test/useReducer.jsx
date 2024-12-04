import React, { useReducer } from 'react';

// Reducer функция
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Неизвестное действие');
  }
};

function CounterUseReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Счетчик: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Увеличить</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Уменьшить</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Сбросить</button>
    </div>
  );
}

export default CounterUseReducer;

