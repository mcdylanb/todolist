import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = ({ title, id }) => {
  return <li>{title}</li>;
};

const App = () => {
  const todoList = [
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
  ];

  return (
    <div>
      <h1>TODO APP</h1>
      {todoList.map(todoList => (
        <Todo key={todoList.id} title={todoList.title} />
      ))}
    </div>
  );
};

export default App;
