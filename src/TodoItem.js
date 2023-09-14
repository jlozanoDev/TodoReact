import './TodoItem.css';
import { FaTrash,FaCheck } from "react-icons/fa";

function TodoItem(props){
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}><FaCheck/></span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span  className="Icon Icon-delete"><FaTrash/></span>
    </li>
  );
}
export { TodoItem };