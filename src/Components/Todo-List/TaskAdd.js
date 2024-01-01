import React, { useState } from "react";
import "./TaskAdd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export const TaskAdd = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const newId = uuidv4(); // Generate a unique id using uuid

    setTodos([...todos, { id: newId, input, completed: false }]);
    setInput("");
  };
  const deleteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id !== id);
    setTodos(newTodoList);
  };

  // const editTodo = (id) => {
  //   const updatedTodo = todos.map((val) => )

  // };

  // const doneTodo = (id) => {
  //   const newArr = todos.map((val) => {
  //     if (val.id === id) {
  //       console.log(val);
  //       val.completed = true;
  //     }
  //   });
  //   console.log(newArr);
  // };

  return (
    <div>
      <div className="input-box">
        <input
          type="text"
          className="input-area"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {
          <button type="submit" disabled={!input.trim()} onClick={addTask}>
            Add Task
          </button>
        }
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
              {/* <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(val.id)} /> */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
