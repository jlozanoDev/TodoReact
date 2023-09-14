import './CreateTodoButton.css';
function CreateTodoButton(){
    return (
      <div  style={{display:'flex',justifyContent:'end',paddingRight:'30px'}}>
        <input className='CreateTodoInput' placeholder='Añadir nuevos todos...' style={{width:'100%'}}></input>
        <button onClick={(event) => {
          console.log("click");
          console.log(event.target);
          }
        } className="CreateTodoButton">+</button>  
      </div>
      
    );
}
export { CreateTodoButton };