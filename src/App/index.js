import React from 'react';
import './index.css';
import { AppUI } from './AppUi';
import { UseLocalStorage } from './LocalStorage';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const {
    item : todos, 
    saveItem: saveTodos, 
    loading, 
    error} = UseLocalStorage('TODOS_V1', []);
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
  return (
      <AppUI
        
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        loading = {loading}
        error = {error}
      />
  );
}




export default App;
