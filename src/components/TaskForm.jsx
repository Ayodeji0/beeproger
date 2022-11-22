import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";
// import {FaPlus} from "react-icons/fa"

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);


  const [values, setValues] = useState({
    title: '',
    description: '', });



  const handleSubmit = async(e) => {
    e.preventDefault();
    if (values.title ==='' || values.description === "") return
    else{
       await addTask(values)
    }
  };

  const handleChange = (e) => {
   const { name, value } = e.target;
   setValues({ ...values, [name]: value});};

  // useEffect(()=>{
  //  if(editItem !==null){
  //   setTitle(editItem.title)
  //  }else{
  //   setTitle('')
  //  }
  // },[editItem])
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={values.title}
        className="task-input"
        placeholder="Enter Task"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={values.description}
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
