



import { useState, useEffect } from 'react';

import List from './List'; // Свой компонент List
import { data } from '../data'

export default function Time() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <span>Время сейчас: {time.toLocaleTimeString()}</span>
            <h2>Список элементов:</h2>
            {data.map(item => (
                    <List key={item.id} {...item} />
                ))}
        </>
    );
}