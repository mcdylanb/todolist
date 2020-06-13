import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
    >
      <div className="todoBar">
        <button onClick={() => removeTodo(index)} className="delete">
          Delete
        </button>
        <div className="text">{todo.title}</div>
        <button onClick={() => completeTodo(index)} className="done">
          Done
        </button>
      </div>
    </div>
  );
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
        placeholder="Add a ToDo"
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

  const addTodo = title => {
    const newTodos = [...todoList, { title }];
    console.log({ title });
    console.log({ newTodos });
    setTodoList(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todoList];
    newTodos[index].isComplete = true;
    setTodoList(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  return (
    <div className="App">
      <div className="todo">
        {todoList.map((todoList, index) => (
          <Todo
            key={index}
            index={index}
            todo={todoList}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <div></div>
    </div>
  );
};

export default App;
