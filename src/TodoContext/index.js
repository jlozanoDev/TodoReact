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
  
    const completeTodo = (id) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
      )
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
    const deleteTodo = (id) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
      )
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
    return (<TodoContext.Provider value={{
        loading,
        error,  
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodo,
        completeTodo,
        deleteTodo
    }}>
        {children}
    </TodoContext.Provider>);
}

export {TodoContext, TodoProvider};