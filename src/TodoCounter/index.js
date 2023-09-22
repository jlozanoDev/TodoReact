import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function createMarkup(htmlString) {
  return { __html: htmlString };
}
function TodoCounter(){
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  const message = (completedTodos === totalTodos)
      ? '<b>¡¡Enhorabuena!! <br>has completado todas las tareas</b>'
      : `Has completado <b>${completedTodos}</b> de <b>${totalTodos}</b> TODOS`;
    return (
      <h1 className="TodoCounter">
        <div dangerouslySetInnerHTML={createMarkup(message)} />
        
      </h1>
    );
}
export { TodoCounter };