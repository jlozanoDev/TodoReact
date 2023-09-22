
import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
      <div>
        <input 
          placeholder="Buscar..."
          className="TodoSearch" 
          value = {searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
          }}
        />
      </div>
      
    );
}
export { TodoSearch };