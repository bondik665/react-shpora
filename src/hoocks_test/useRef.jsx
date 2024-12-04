import React, { useRef, useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // Добавляем состояние для отслеживания работы таймера
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]); // Зависимость от isRunning

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false); // Устанавливаем состояние isRunning в false
  };

  const handleResume = () => {
    setIsRunning(true); // Устанавливаем состояние isRunning в true
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={handleStop}>Остановить таймер</button>
      <button onClick={handleResume}>Возобновить таймер</button>
    
    </div>
  );
}

export default Timer;
