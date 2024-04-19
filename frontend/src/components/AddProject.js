import axios from "axios";
import React, { useState } from "react";

const AddProject = ({data,isUpdated}) => {

  const [projectName,setProjectName] = useState("")
  const [projectDesc,setProjectDesc] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/postaddproject', {
        projectName: projectName,
        projectDesc: projectDesc
      });
      data(false)
      console.log("alex")
      console.log(response.data);
      if(response.data.status == "success"){
        isUpdated("updated")
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

   const handleClose = () => {
    data(false)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-2 rounded-md w-10/12 md:w-4/12 p-3 font-poppins">
        <button onClick={handleClose} className="flex justify-end w-full">
          <span className="material-symbols-outlined">close</span>
        </button>
        <form>
          <div className="mb-4">
            <label className="text-sm mb-1">Project Name:</label>
            <input onChange={(e) => {setProjectName(e.target.value)}} className="w-full px-2 border-[2px]" type="text" />
          </div>
          <div className="mb-4">
            <label className="text-sm mb-1">Project Description:</label>
            <textarea onChange={(e) => {setProjectDesc(e.target.value)}} className="p-3 border-2 w-full"></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
