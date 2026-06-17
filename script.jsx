import { useState } from "react";

function MyButton({ title, onClick }) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const taskText = taskInput.trim();

    if (taskText === "") return;

    setTasks([
      ...tasks,
      {
        text: taskText,
        completed: false,
      },
    ]);

    setTaskInput("");
  }

  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <MyButton
        title="Add Task"
        onClick={addTask}
      />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                margin: "0 10px",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
