import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.title}</div>;
};

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      title: "clean the dishes",
      isComplete: false
    },
    {
      title: "clean the room",
      isComplete: false
    },
    {
      title: "learn react",
      isComplete: false
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
    setNewTodo(event.target.value);
  };

  console.log(todoList[1].title);
  return (
    <div className="App">
      <div className="todo">
        {todoList.map((todoList, index) => (
          <Todo key={index} index={index} todo={todoList} />
        ))}
      </div>

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
