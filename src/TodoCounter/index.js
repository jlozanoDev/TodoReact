import './TodoCounter.css';
function createMarkup(htmlString) {
  return { __html: htmlString };
}
function TodoCounter({total, completed}){
  const message = (completed === total)
      ? '<b>¡¡Enhorabuena!! <br>has completado todas las tareas</b>'
      : `Has completado <b>${completed}</b> de <b>${total}</b> TODOS`;
    return (
      <h1 className="TodoCounter">
        <div dangerouslySetInnerHTML={createMarkup(message)} />
        
      </h1>
    );
}
export { TodoCounter };