import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
// import {FaPlus} from "react-icons/fa"
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
 
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <MdDelete />
        </button>

        <button
         onClick={() => findItem(task.id)}
        >
          <FaPen className="btn-edit task-btn" />
        </button>
      </div>
    </li>
  );
};

export default Task;
