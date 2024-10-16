import "./Todo.scss";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs";
import { changeTodoStatus, removeFromTodos, changeTodoColor } from "../store/slice";

const Todo = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

  // A function to handle the status property.  
  const handleStatus = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  // A function to handle the delete button.  
  const handleDelete = () => {
    dispatch(removeFromTodos(todo.id));
  };
  const handleEditColor = () => {
    dispatch(changeTodoColor(todo.id));
  }

  return (
    <div className="todo">
      <div className="text">
        <span className={`${todo.status === "complete" && "complete"}`}>
          <span style={{ color: todo.color }}> {todo.text}</span>
        </span>
      </div>
      <div className="edit">
        <div onClick={() => handleEditColor(todo.id)}>
          <FaHeart style={{color:todo.color}}/>
        </div>
        <div onClick={() => handleEdit(todo.id)}>
          <BsPencil />
        </div>
        <div onClick={handleStatus}>
          <BsCheckCircle />
        </div>
        <div onClick={handleDelete}>
          <BsTrash />
        </div>
      </div>
    </div>
  );
};

export default Todo;