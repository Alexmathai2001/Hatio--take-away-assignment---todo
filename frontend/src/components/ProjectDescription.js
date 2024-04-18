import React from "react";

const ProjectDescription = () => {
  return (
    <div className="py-20 px-5 font-poppins">
      <hi className="text-2xl font-bold text-blue-700">Project Name</hi>
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
        ></input>
        <button className="py-2 px-5 w-4/12 rounded-lg bg-blue-700 text-white font-medium text-sm">
          Add task
        </button>
      </div>
      <p className="mt-5 font-medium text-sm  text-blue-700">Active</p>


      {/* single task */}
      <div className="flex items-center mb-4 my-3">
        <input 
          type="checkbox" class="form-checkbox h-6 w-6 text-indigo-600">
        </input>
        <input type="text" className="ml-3 w-full border-b border-gray-300
          focus:outline-none focus:border-indigo-500" placeholder="Enter your
          todo item">
          
        </input>
      </div>
      {/* single task */}
      <div className="flex items-center mb-4 my-3">
        <input 
          type="checkbox" class="form-checkbox h-6 w-6 text-indigo-600">
        </input>
        <input type="text" className="ml-3 w-full border-b border-gray-300
          focus:outline-none focus:border-indigo-500" placeholder="Enter your
          todo item">
          
        </input>
      </div>
      {/* single task */}
      <div className="flex items-center mb-4 my-3">
        <input 
          type="checkbox" class="form-checkbox h-6 w-6 text-indigo-600">
        </input>
        <input type="text" className="ml-3 w-full border-b border-gray-300
          focus:outline-none focus:border-indigo-500" placeholder="Enter your
          todo item">
          
        </input>
      </div>
      {/* single task */}
      <div className="flex items-center mb-4 my-3">
        <input 
          type="checkbox" class="form-checkbox h-6 w-6 text-indigo-600">
        </input>
        <input type="text" className="ml-3 w-full border-b border-gray-300
          focus:outline-none focus:border-indigo-500" placeholder="Enter your
          todo item">
          
        </input>
      </div>
      <p className="mt-5 font-medium text-sm  text-blue-700">Completed</p>
      {/* single completed task */}
      <div className="flex items-center mb-4 my-3">
        <input 
          type="checkbox" checked class="form-checkbox h-6 w-6 text-indigo-600">
        </input>
        <input type="text" className="ml-3 w-full border-b border-gray-300
          focus:outline-none focus:border-indigo-500" placeholder="Enter your
          todo item">
          
        </input>
      </div>

      <div className="w-full flex justify-end">
        <button className="px-5 mt-10 py-2 bg-yellow-600 text-sm font-semibold rounded-md text-white">Save</button>
      </div>
    </div>
  );
};

export default ProjectDescription;
