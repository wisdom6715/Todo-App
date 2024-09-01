import style from "./footer.module.css";
export default function Footer({ numberOfCompleted, totalTodos }) {
  return (
    <div className={style.footer}>
      <h2>Number of completed item is : {numberOfCompleted}</h2>
      <h2>Number of total items is : {totalTodos}</h2>
    </div>
  );
}
