import React, { createContext, useState, useEffect, useCallback } from "react";
import { v4 } from "uuid";
import { getAllTodo } from "../Api/Client";
import { useAllTodo } from "../hook/useAllTodo";

export const TaskListContext = createContext();
// import reducer from "./reducer";


const TaskListContextProvider = (props) => {
  
  const [tasks, setTasks] = useState([]);
  const fetchAllTodo= useCallback( async()=>{
    const result = await getAllTodo()
   setTasks(result.data?.data)
    },[])
    useEffect(()=>{
    fetchAllTodo()
    },[fetchAllTodo])

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: v4() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTask);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
