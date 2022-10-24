import React, { useState } from "react";

import List from "./components/List";
import ToDoItem from "./components/ToDoItem";
import Input from "./components/Input";
import "./App.css";

export default function App() {
  let todos = [
    {
      id: "1",
      title: "buy milk",
    },
    {
      id: "2",
      title: "pay bill",
    },
    {
      id: "3",
      title: "send flowers",
    },
  ];

  const [todo, setTodo] = useState(todos);

  const addTodo = (value) => {
    setTodo((prev) => [...prev, value]);
  };

  const deleteTodo = (itemIndex) => {
    setTodo((prev) => [...prev.filter((item, index) => index !== itemIndex)]);
  };

  return (
    <div className="container">
      {/* Todo */}
      <section className="todo">
        {/* Todo input */}
        <Input onClick={addTodo} />
        {/* Todo list */}
        <List>
          {todo.map((singleTodo, index) => {
            return (
              <ToDoItem todo={singleTodo.title} key={`todo-${index}`}>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </ToDoItem>
            );
          })}
        </List>
      </section>
    </div>
  );
}
