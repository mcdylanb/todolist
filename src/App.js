import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = ({ title, id }) => {
  return <li>{title}</li>;
};

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "clean the dishes"
    },
    {
      id: 2,
      title: "clean the room"
    },
    {
      id: 3,
      title: "learn react"
    }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = event => {
    event.preventDefault();
    const todoListObject = {
      title: newTodo,
      id: todoList.length + 1
    };
    setTodoList(todoList.concat(todoListObject));
    console.log(todoListObject);
    setNewTodo("");
  };

  const handleChangeTitle = event => {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>TODO APP</h1>
      {todoList.map(todoList => (
        <Todo key={todoList.id} title={todoList.title} />
      ))}
      <div>
        <form onSubmit={addTodo}>
          <div>
            <input value={newTodo} onChange={handleChangeTitle} />
            <div>
              <button type="submit">+</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
