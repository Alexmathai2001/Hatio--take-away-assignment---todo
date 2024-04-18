import React from "react";
import { Link } from "react-router-dom";
import ProjectContainer from "./ProjectContainer";

const MainPage = () => {
  return (
    <div>
      {/* header */}
      <div className="flex justify-between px-3 py-4 items-center">
        <div>
          <h1 className="font-bold text-xl text-blue-700">To-Do</h1>
        </div>
        <div>
          <button className="px-5 py-2 rounded-lg bg-blue-700 text-white font-medium">
            New Project
          </button>
        </div>
      </div>
      {/* project section */}
      <div>
        <ProjectContainer />
      </div>
    </div>
  );
};

export default MainPage;
