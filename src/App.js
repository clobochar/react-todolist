import React, { useState } from "react";

import List from "./components/List";
import ToDoItem from "./components/ToDoItem";
import Input from "./components/Input";
import "./App.css";

export default function App() {
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  let todos = [
    {
      id: uuidv4(),
      title: "buy milk",
    },
    {
      id: uuidv4(),
      title: "pay bill",
    },
    {
      id: uuidv4(),
      title: "send flowers",
    },
  ];

  const [todo, setTodo] = useState(todos);

  const addTodo = (value) => {
    const newValue = {
      title: value,
      id: uuidv4(),
    };
    setTodo((prev) => [...prev, newValue]);
  };

  const deleteTodo = (id) => {
    setTodo((prev) => [...prev.filter((item, index) => item.id !== id)]);
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
              <ToDoItem todo={singleTodo.title} key={singleTodo.id}>
                <button onClick={() => deleteTodo(singleTodo.id)}>
                  Delete
                </button>
              </ToDoItem>
            );
          })}
        </List>
      </section>
    </div>
  );
}
