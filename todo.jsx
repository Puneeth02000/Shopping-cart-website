import React, { useContext, useState, useRef, useReducer } from "react";
import "./App.css";
import Counter from "./hooks.jsx";
import { TodoItems3 } from "./store.jsx";
import defaultTodoItems from "./App.js";


const Todo = () => {
  const [todos, setTodos] = useState([]);
  //const [newTodo, dispatachTodo] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");
  const noOfClicks = useRef(0);
  const todoItemsLink = useContext(defaultTodoItems);
  console.log(` items context ${todoItemsLink}`);

  console.log(`items :${TodoItems3}`);
  console.log(TodoItems3);
  const handleChange = (event) => {
    setInputValue(event.target.value);
    noOfClicks.current += 1;
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue(" ");
      console.log(` added products are :${noOfClicks.current}`);
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((a, i) => i !== index));
    console.log(`item deleted ${todos}`);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new Item"
        />
        {todos.length === 0 && <h1>Please add Your items</h1>}
        <button onClick={handleAddTodo}>Add Items</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Counter />
            <button onClick={() => handleRemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
