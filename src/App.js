
import './index.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


import React from 'react';
const defaultTodos = [
  {id: '1', text: 'Cortar cebolla', completed: true},
  {id: '2', text: 'Cortar cebolla1', completed: false},
  {id: '3', text: 'Cortar cebolla2', completed: false},
  {id: '4', text: 'Cortar cebolla3', completed: true},
  {id: '5', text: 'Cortar cebolla4', completed: false},
  {id: '6', text: 'Curso de react', completed: true}
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos= todos.length;
  const searchedTodo= todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  });
  return (
    <>
      <div className='content'>
        <div className='column column1'>
          <br></br>
          <CreateTodoButton/>
        </div>
        <div className='column'>
          <TodoCounter total={totalTodos} completed={completedTodos}/>
          <TodoSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          <TodoList>
            {searchedTodo.map( todo => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
            ))}
          </TodoList>
          
        </div>
      </div>
      
    </>
  );
}




export default App;
