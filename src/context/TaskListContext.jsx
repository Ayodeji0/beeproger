import React, { createContext, useState, useEffect, useCallback } from "react";
import { v4 } from "uuid";
import { getAllTodo, postTodo, removeTodo } from "../Api/Client";
import { useAllTodo } from "../hook/useAllTodo";
export const TaskListContext = createContext();
// import reducer from "./reducer";

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const fetchAllTodo = useCallback(async () => {
    const result = await getAllTodo();
    setTasks(result.data?.data);
  }, []);
  useEffect(() => {
    fetchAllTodo();
  }, [fetchAllTodo]);

  const [editItem, setEditItem] = useState(null);

  const addTask = async (values) => {
    const formData = new FormData();
    formData.append("TodoList-image", "");
    formData.append("TodoList-title", values.title);
    formData.append("TodoList-description", values.description);
    formData.append("id", v4);
    console.log(values, "values");
    const result = await postTodo(formData);
    console.log("data.result.data", result.data);
    console.log(result.status, "status");
  };

  const removeTask = (id) => {
     removeTodo(id)
      .then((response) => console.log( response,"response"))
      .catch((error) => console.log(error)).finally(()=>fetchAllTodo())
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
