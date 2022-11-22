import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";
// import {FaPlus} from "react-icons/fa"

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem ===null) {
      addTask(title);
      setTitle('')
      console.log(title);
    } else{
      editTask(title, editItem.id)
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(()=>{
   if(editItem !==null){
    setTitle(editItem.title)
   }else{
    setTitle('')
   }
  },[editItem])
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        className="task-input"
        placeholder="Enter Task"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        value={title}
        className="task-input"
        placeholder="Enter Description"
        required
        onChange={handleChange}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
         {editItem? 'Edit Item' : 'Add Items'}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
