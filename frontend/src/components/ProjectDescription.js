import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectDescription = () => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setActiveTasks([...activeTasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleTaskCompletion = (index) => {
    const updatedActiveTasks = [...activeTasks];
    const completedTask = updatedActiveTasks.splice(index, 1)[0];
    setCompletedTasks([...completedTasks, completedTask]);
    setActiveTasks(updatedActiveTasks);
  };

  const handleDeleteTask = (index, taskType) => {
    if (taskType === "active") {
      const updatedActiveTasks = [...activeTasks];
      updatedActiveTasks.splice(index, 1);
      setActiveTasks(updatedActiveTasks);
    } else if (taskType === "completed") {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  // const handleSave = () => {
  //   // Prepare data to send to backend
  //   const data = {
  //     projectName: projectName,
  //     projectDescription: projectDescription,
  //     activeTasks: activeTasks,
  //     completedTasks: completedTasks,
  //   };

  //   // Make POST request to backend
  //   axios.post("your-backend-api-endpoint", data)
  //     .then((response) => {
  //       // Handle success
  //       console.log("Data successfully saved:", response.data);
  //       // Optionally, you can navigate to another page or show a success message
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error saving data:", error);
  //     });
  // };

  return (
    <div className="py-10 px-5 font-poppins">
      <div className="w-full flex justify-between items-center mb-10">
        <Link to={"/main"} className="flex items-center">
          <span className="material-symbols-outlined text-lg">
            arrow_back_ios
          </span>
          <p>Go Back</p>
        </Link>

        <button className="bg-gray-500 text-white font-medium px-5 py-1 text-sm rounded-md">
          Export
        </button>
      </div>
      <div className="md:mx-96">
        <input
          value={"Project Name"}
          className="text-2xl outline-none font-bold text-blue-700"
        ></input>
        <p className="text-sm text-slate-500">
          Created on : <span className="font-semibold">3rd April 2024</span>
        </p>
        <p className="text-sm my-5 text-slate-700">
          lorem ipsum generatior is an online website which is used to generate
          randon text which can be used as sample ocntent for any undefined or
          unchecked data{" "}
        </p>
        <div className="flex w-full gap-2">
          <input
            className="w-8/12 text-sm px-2 border-gray-500 border-[1px] rounded-md"
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button
            onClick={handleAddTask}
            className="py-2 px-5 w-4/12 rounded-lg bg-blue-700 text-white font-medium text-sm"
          >
            Add task
          </button>
        </div>
        <p className="mt-5 font-medium text-sm  text-blue-700">Active</p>

        {activeTasks.map((task, index) => (
          <div className="flex items-center mb-4 my-3" key={index}>
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              checked={task.completed}
              onChange={() => handleTaskCompletion(index)}
            />
            <input
              type="text"
              className="ml-3 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your todo item"
              value={task.text}
              onChange={(e) => {
                const updatedActiveTasks = [...activeTasks];
                updatedActiveTasks[index].text = e.target.value;
                setActiveTasks(updatedActiveTasks);
              }}
            />
            {/* remove button */}
            <button
              onClick={() => handleDeleteTask(index, "active")}
              className="text-sm text-red-600 font-medium"
            >
              <img src="/images/remove.png" className="w-6"></img>
            </button>
          </div>
        ))}
        <p className="mt-5 font-medium text-sm  text-blue-700">Completed</p>
        {/* single completed task */}
        {completedTasks.map((task, index) => (
          <div className="flex items-center mb-4 my-3" key={index}>
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              checked
              readOnly
            />
            <input
              type="text"
              className="ml-3 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your todo item"
              value={task.text}
              readOnly
            />
            {/* remove button */}
            <button
              onClick={() => handleDeleteTask(index, "completed")}
              className="text-sm text-red-600 font-medium"
            >
              <img src="/images/remove.png" className="w-6"></img>
            </button>
          </div>
        ))}

        <div className="w-full flex justify-end">
          <button className="px-5 mt-10 py-2 bg-yellow-600 text-sm font-semibold rounded-md text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
