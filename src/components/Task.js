import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
// import {FaPlus} from "react-icons/fa"
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = ({ image, description, title, id }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
 
  return (
    <li className="list-item">
      <div className="mainG">
     <div>
      <img src={image} alt={title} height={50} width={50}/>
      </div>
      <div className="description">
        <h2 className="todoTitle">{title}</h2>
        <p>{description}</p>
      </div>
     </div>
      <div className="funbtn">
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(id)}
        >
          <MdDelete />
        </button>

        <button
         onClick={() => findItem(id)}
        >
          <FaPen className="btn-edit task-btn" />
        </button>
        </div>
    </li>
   
    
  );
};

export default Task;
