import React, { useReducer } from 'react';

const initialState = {
  tasks: [],
  inputValue: ''
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        inputValue: ''
      };
    case 'updateInput':
      return {
        ...state,
        inputValue: action.payload
      };
    case 'deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload)
      };
    default:
      throw new Error('Неизвестное действие');
  }
};

function TaskList() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleInputChange = (event) => {
    dispatch({ type: 'updateInput', payload: event.target.value });
  };

  const handleAddTask = () => {
    dispatch({ type: 'addTask', payload: state.inputValue });
  };

  const handleDeleteTask = (index) => {
    dispatch({ type: 'deleteTask', payload: index });
  };

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;