import React, { useState, useMemo } from 'react';

export default function CalcUseMEmo({ data }) {
  const [count, setCount] = useState(0);

  // Сложное вычисление с использованием useMemo
  const result = useMemo(() => {
    console.log('Выполняется сложное вычисление...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [data]); // Вычисление будет выполнено заново только при изменении data

  return (
    <div>
      <p>Результат вычисления: {result}</p>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить счетчик</button>
    </div>
  );
}