import React from "react";
import { UseLocalStorage } from "./LocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}){
    const [searchValue, setSearchValue] = React.useState('');
    const {
      item : todos, 
      saveItem: saveTodos, 
      loading, 
      error
    } = UseLocalStorage('TODOS_V1', []);
    const completedTodos = (todos)?todos.filter(todo=>!!todo.completed).length:0;
    const totalTodos= (todos)?todos.length:0;
    const searchedTodo= (todos)?todos.filter((todo) => {
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    }):null;

    const [openModal, setOpenModal] = React.useState(false);

    const [deleteTodoId, setDeleteTodoId] = React.useState(null);
  
    const completeTodo = (id) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
      )
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
    const deleteTodo = (id) =>{
      setDeleteTodoId(id);
      setOpenModal(!openModal);
    };
    const addTodo = (text) =>{
      const newTodos = [...todos];
      let nextId = 1;
      if (newTodos.length>0){
        nextId = newTodos.map((item) => item.id).reduce((acc, item) => {
          return Math.max(acc, item);
        }, 0) + 1;
      }
      newTodos.push({
        id: nextId,
        text,
        completed:false
      })
      
      saveTodos(newTodos);
    };
    return (<TodoContext.Provider value={{
        todos,
        loading,
        error,  
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        deleteTodoId, 
        setDeleteTodoId,
        saveTodos,
        addTodo
    }}>
        {children}
    </TodoContext.Provider>);
}

export {TodoContext, TodoProvider};