import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoFormDelete.css';
import { FaTrash } from "react-icons/fa";

function TodoFormDelete() {
    const {setOpenModal, deleteTodoId, todos, saveTodos} = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
      };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === deleteTodoId
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        setOpenModal(false);
      };
    return (
        <form onSubmit={onSubmit}>
            <label>¿Seguro que desea eliminar el Todo: ""?</label>
            <div className="TodoForm-buttonContainer">
                
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--delete"
                > <FaTrash/> Eliminar</button>
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >Cancelar</button>
            </div>
        </form>
    );
}

export {
    TodoFormDelete
};