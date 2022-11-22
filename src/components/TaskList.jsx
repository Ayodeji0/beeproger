import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {" "}
          {tasks.map((task) => {
            const {
              "TodoList-image": image,
              id,
              "TodoList-title": title,
              "TodoList-description": description,
            } = task;
            return (
              
              <Task
                id={id}
                key={id}
                image={image}
                title={title}
                description={description}

              />
            );
          })}
        </ul>
      ) : (
        <div className="no-tasks">NO TASKS</div>
      )}
    </div>
  );
};

export default TaskList;
