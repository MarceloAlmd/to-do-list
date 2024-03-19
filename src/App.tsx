import { Header } from "./components/header";
import { InputForm } from "./components/inputForm";
import { Status } from "./components/status";
import { EmptyTask } from "./components/emptyTask";
import { Task } from "./components/task";
import { useState } from "react";
import * as Styles from "./app.styles";

interface TaskProps {
  task: string;
  status: "done" | "progress";
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState("");

  const { length } = tasks;

  const doneTasks = tasks
    .map((task, index) => (task.status === "done" ? index : null))
    .filter((index) => index !== null) as number[];

  function handleAddNewTask() {
    if (newTask.trim() !== "") {
      const newTaskObject: TaskProps = { task: newTask, status: "progress" };

      setTasks((prevState) => [...prevState, newTaskObject]);

      setNewTask("");
    }
  }

  function handleRemoveTask(taskDescription: string) {
    setTasks((prevState) =>
      prevState.filter((state) => state.task !== taskDescription)
    );
  }

  function handleCheckTask(taskChecked: string, status: "done" | "progress") {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.task === taskChecked ? { ...task, status: status } : task
      )
    );
  }

  return (
    <>
      <Header />
      <InputForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddNewTask={handleAddNewTask}
      />
      <Status taskDone={doneTasks.length} taskCreated={length} />

      <Styles.Main>
        {tasks.length === 0 && <EmptyTask />}
        {tasks.map((task) => {
          return (
            <Task
              key={String(task.task)}
              taskDescription={task.task}
              status={task.status}
              handleRemoveTask={() => handleRemoveTask(task.task)}
              handleCheckTask={() => handleCheckTask(task.task, "done")}
              handleUncheckTask={() => handleCheckTask(task.task, "progress")}
            />
          );
        })}
      </Styles.Main>
    </>
  );
}
