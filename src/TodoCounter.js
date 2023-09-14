import './TodoCounter.css';
function TodoCounter({total, completed}){
    return (
      <h1 className="TodoCounter">
        Has completado <b>{completed}</b> de <b>{total}</b> TODOS
      </h1>
    );
}
export { TodoCounter };