import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const numberOfCompleted = todos.filter((todos) => todos.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer numberOfCompleted={numberOfCompleted} totalTodos={totalTodos} />
    </div>
  );
}
