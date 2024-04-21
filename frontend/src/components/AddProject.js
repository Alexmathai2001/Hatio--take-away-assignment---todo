import React from "react";
import useProjectForm from "../hooks/useProjectForm";

const AddProject = ({ data, isUpdated }) => {

  const { projectName, projectDesc, handleChange, handleSubmit } = useProjectForm({
    data,
    isUpdated,
  });
  
  const handleClose = () => {
    data(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-2 rounded-md w-10/12 md:w-4/12 p-3 font-poppins">
        <button onClick={handleClose} className="flex justify-end w-full">
          <span className="material-symbols-outlined">close</span>
        </button>
        <form>
          <div className="mb-4">
            <label className="text-sm mb-1">Project Name:</label>
            <input
              name="projectName"
              value={projectName}
              onChange={handleChange}
              className="w-full px-2 border-[2px]"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm mb-1">Project Description:</label>
            <textarea
              name="projectDesc"
              value={projectDesc}
              onChange={handleChange}
              className="p-3 border-2 w-full"
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
