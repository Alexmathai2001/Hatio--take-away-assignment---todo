import React from "react";

const AddProject = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden">
      <div className="bg-white border-2 rounded-md w-10/12 p-3 font-poppins">
        <button className="flex justify-end w-full">
          <span className="material-symbols-outlined">close</span>
        </button>
        <form>
          <div className="mb-4">
            <label className="text-sm mb-1">Project Name:</label>
            <input className="w-full px-2 border-[2px]" type="text" />
          </div>
          <div className="mb-4">
            <label className="text-sm mb-1">Project Description:</label>
            <textarea className="p-3 border-2 w-full"></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;