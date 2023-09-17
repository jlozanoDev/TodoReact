import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import ReactLoading from "react-loading";
import './index.css';
function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
  return (
    <>
        <div className='content'>
            <div className='column column1'>
                <CreateTodoButton/>
                <br></br>
            </div>
            <div className='column'>
                <TodoCounter
                    completed={completedTodos}
                    total={totalTodos} 
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoList>
                    {loading && <center><ReactLoading type="bubbles" color="#61DAFA" /></center>}
                    {error && <p>Se ha producido un error al cargar los Todos</p>}
                    {(!error && !loading && searchedTodos.length === 0) && <p>Crea tu primer Todo</p>}

                    {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                    ))}
                </TodoList>
            </div>
        </div>
    </>
  );
}

export { AppUI };