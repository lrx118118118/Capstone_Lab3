import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;

    const newTodos = [...todos, task];
    setTodos(newTodos);
    console.log("Current Todos:", newTodos);

    setTask('');
  };

  const handleDelete = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>

      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
      </div>

      <button className="btn btn-primary mb-3" onClick={handleAdd}>Add</button>

      <ul className="list-group">
        {todos.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {item}
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
