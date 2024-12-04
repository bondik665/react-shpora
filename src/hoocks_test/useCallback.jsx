import React, { useState, useCallback } from 'react';

export default function ParentComponentUseCallback() {
  const [text, setText] = useState('');

  const handleChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <div>
      <p>Введенный текст: {text}</p>
      <ChildComponent onChange={handleChange} />
    </div>
  );
}

function ChildComponent({ onChange }) {
  return (
    <input type="text" onChange={onChange} />
  );
}