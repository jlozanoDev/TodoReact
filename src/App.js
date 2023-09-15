import React from 'react';
import './index.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { UseLocalStorage } from './LocalStorage';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, saveTodos] = UseLocalStorage('TODOS_V1', []);
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
    <>
      <div className='content'>
        <div className='column column1'>
          <br></br>
          <CreateTodoButton/>
          <br></br>
        </div>
        <div className='column'>
          <TodoCounter total={totalTodos} completed={completedTodos}/>
          {(searchedTodo)?
            <TodoSearch
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
            />:''            
          }
          <TodoList>
            {(searchedTodo)?searchedTodo.map( todo => (
              <TodoItem 
                key={todo.id} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={()=>{
                  completeTodo(todo.id)
                }}

                onDelete={()=>{
                  deleteTodo(todo.id)
                }
                } />
            )):''}
          </TodoList>
          
        </div>
      </div>
      
    </>
  );
}




export default App;
