import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDescription = () => {
  const {id} = useParams()
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [projectName, setProjectName] = useState();
  const [updatedDate, setUpdatedDate] = useState();
  const [projectDesc, setProjectDesc] = useState();
  

  useEffect(() => {
    const call = async () => {
      try {
        console.log(id)
        const response = await axios.get("/getTodoData/"+id);
        const data = response.data?.[0];
        setProjectName(data.projectName);
        setUpdatedDate(data.updatedDate);
        setProjectDesc(data.projectDesc);
        const activeTasks = data.todoList.filter((task) => !task.status);
        const completedTasks = data.todoList.filter((task) => task.status);
        setActiveTasks(activeTasks);
        setCompletedTasks(completedTasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    call();
  }, []);

  const handleProjectchange = (e) => {
    setProjectName(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setActiveTasks([...activeTasks, { taskName: newTask, status: false }]);
      setNewTask("");
    }
  };

  const handleTaskCompletion = (index) => {
    
    const completedTask = activeTasks[index];
    completedTask.status = true;

    // Add the completed task to the completedTasks array
    setCompletedTasks([...completedTasks, completedTask]);

    // Remove the completed task from activeTasks
    const updatedActiveTasks = activeTasks.filter((task, i) => i !== index);
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

  const handleSave = () => {
    const data = {
      projectID : id,
      projectName: projectName,
      activeTasks: activeTasks,
      completedTasks: completedTasks,
    };
    console.log(id);
    console.log(data);

    axios
      .post("/savetodo", data)
      .then((response) => {
        console.log("Data successfully saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

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
          value={projectName}
          onChange={handleProjectchange}
          className="text-2xl outline-none capitalize font-bold text-blue-700"
        ></input>
        <p className="text-sm text-slate-500">
          <span className="font-semibold">{updatedDate}</span>
        </p>
        <p className="text-sm my-5 text-slate-700">{projectDesc}</p>
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
              value={task.taskName}
              onChange={(e) => {
                const updatedActiveTasks = [...activeTasks];
                updatedActiveTasks[index].text = e.target.value;
                setActiveTasks(updatedActiveTasks);
              }}
            />
            
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
            <p className="ms-2 text-gray-500">{task.taskName}</p>
            {/* <input
              type="text"
              className="ml-3 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your todo item"
              value={task.taskName}
              readOnly
            /> */}
            {/* remove button */}
            
          </div>
        ))}

        <div className="w-full flex justify-end">
          <button
            onClick={handleSave}
            className="px-5 mt-10 py-2 bg-yellow-600 text-sm font-semibold rounded-md text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
