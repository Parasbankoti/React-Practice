import React, { useState } from "react";
import "./TaskAdd.css";

export const TaskAdd = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    setTodos([...todos, input]);
  };

  return (
    <div>
      <div className="input-box">
        <input
          type="text"
          className="input-area"
          //   value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn-submit" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="viewTodo">
        <ul>
          {todos.map((val, id) => {
            return (
              <>
                <div className="current-todo"></div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
