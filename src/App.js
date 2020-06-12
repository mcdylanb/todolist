import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.title}</div>;
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
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

  const addTodo = text => {
    const newTodos = [...todoList, { text }];
    setTodoList(newTodos);
  };

  return (
    <div className="App">
      <div className="todo">
        {todoList.map((todoList, index) => (
          <Todo key={index} index={index} todo={todoList} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <div></div>
    </div>
  );
};

export default App;
