import React from "react";
import { useState } from "react";
import "./App.css";
import TodoList from "./companents/TodoList/TodoList";
import Header from "./companents/Header/Header";
import AddTodo from "./companents/AddTodo/AddTodo";
import { Container } from "react-bootstrap";
function App() {
  const [todo, setTodo] = useState([]);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
