import style from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handClick(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log("Delete button clicked for ", item);
  }
  function handleComplete(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const completedTodos = item.done ? style.completedTasks : "";
  return (
    <div className={style.itemContainer}>
      <h3 className={completedTodos} onClick={() => handleComplete(item.name)}>
        {item.name}
      </h3>
      <button onClick={() => handClick(item)} className={style.deleteButton}>
        X
      </button>
    </div>
  );
}
