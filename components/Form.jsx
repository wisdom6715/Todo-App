import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log({ todos });
  }
  return (
    <form className={style.inputForm} onSubmit={handleSubmit}>
      <div className={style.inputDiv}>
        <input
          className={style.inputBlock}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          placeholder="Enter todo item...."
        />
        <button className={style.submitButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
