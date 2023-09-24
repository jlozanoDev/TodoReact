import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
function CreateTodoButton(){
  const {addTodo} = React.useContext(TodoContext);
  const [item, setItem] = React.useState('');
 
 
  return (
    <div  style={{display:'flex',justifyContent:'end',paddingRight:'30px'}}>
      
      <input className='CreateTodoInput' placeholder='Añadir nuevos todos...' 
        value={item} 
        style={{width:'100%'}}
        onChange={(event)=>{
          setItem(event.target.value);
        }}
      />
      <button onClick={(event) => {addTodo(item); setItem('')}} className="CreateTodoButton">+</button>  
    </div>
    
  );
}
export { CreateTodoButton };