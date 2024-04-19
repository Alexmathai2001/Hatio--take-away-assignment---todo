import React, { useState } from "react";
import ProjectContainer from "./ProjectContainer";
import AddProject from "./AddProject";

const MainPage = () => {
  const [showpopup,setShowpopup] = useState(false)


  const handleNewProject = () => {
    setShowpopup(!showpopup)
  }
  return (
    <div>
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
        <ProjectContainer />
      </div>
      <div className="flex justify-center w-full">
        { showpopup && <AddProject data={setShowpopup} />}
      </div>
    </div>
  );
};

export default MainPage;
