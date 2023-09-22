import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodo } from '../EmptyTodo';
import './index.css';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        loading,
        error,  
        searchedTodo,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);
  return (
    <>
        <div className='content'>
            <div className='column column1'>
                <CreateTodoButton/>
                <br></br>
            </div>
            <div className='column'>
                <TodoCounter/>
                <TodoSearch/>
                <TodoList>
                    {loading && <TodosLoading></TodosLoading>}
                    {error && <TodosError></TodosError>}
                    {(!error && !loading && searchedTodo.length === 0) && <EmptyTodo/>}

                    {searchedTodo.map(todo => (
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