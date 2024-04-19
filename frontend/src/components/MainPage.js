import React, { useEffect, useState } from "react";
import ProjectContainer from "./ProjectContainer";
import AddProject from "./AddProject";
import axios from "axios";

const MainPage = () => {
  const [showpopup,setShowpopup] = useState(false)
  const [projectdata,setProjectdata] = useState([])
  const [added,setAdded] = useState('update')

  useEffect(() => {
    const call = async () => {
      const response = await axios.get('/getprojects')
      const data = (response.data)
      setProjectdata(data)
    }
    call()
  },[added])

  const handleNewProject = () => {
    setShowpopup(!showpopup)
  }
  return (
    <div className="md:mx-14">
      {/* header */}
      <div className="flex justify-between px-3 py-4 items-center">
        <div>
          <h1 className="font-bold text-xl text-blue-700">To-Do</h1>
        </div>
        <div>
          <button onClick={handleNewProject} className="px-5 py-2 rounded-lg bg-blue-700 text-white font-medium">
            New Project
          </button>
        </div>
      </div>
      {/* project section */}
      <div>
        <ProjectContainer data={projectdata}/>
      </div>
      <div className="flex justify-center w-full">
        { showpopup && <AddProject data={setShowpopup} isUpdated={setAdded}  />}
      </div>
    </div>
  );
};

export default MainPage;
