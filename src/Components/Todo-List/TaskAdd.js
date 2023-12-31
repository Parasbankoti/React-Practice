import React, { useState } from "react";
import "./TaskAdd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export const TaskAdd = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const newId = uuidv4(); // Generate a unique id using uuid
    setTodos([...todos, { id: newId, input }]);
    setInput("");
  };
  console.log(todos);
  const deleteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id !== id);
    console.log(id);
    setTodos(newTodoList);
  };

  const doneTodo = (id) => {
    // You can handle completed tasks here if needed
    console.log("Task completed:", id);
  };

  return (
    <div>
      <div className="input-box">
        <input
          type="text"
          className="input-area"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn-submit" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="viewTodo">
        <ul>
          {todos.map((val) => (
            <div className="current-todo" key={val.id}>
              <div className="eachTodo">{val.input}</div>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => deleteTodo(val.id)}
              />
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => doneTodo(val.id)}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
