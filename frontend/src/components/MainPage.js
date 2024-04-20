import React, { useEffect, useState } from "react";
import ProjectContainer from "./ProjectContainer";
import AddProject from "./AddProject";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [showpopup,setShowpopup] = useState(false)
  const [projectdata,setProjectdata] = useState([])
  const [added,setAdded] = useState('update')

  useEffect(() => {
    const call = async () => {
      console.log(id+"hello")
      const response = await axios.get('/getprojects/'+id)
      const data = (response.data)
      setProjectdata(data)
    }
    call()
  },[added])

  const handleNewProject = () => {
    setShowpopup(!showpopup)
  }
  const handleLogout = () => {
    const call = async () =>{
      const api = await axios.get('/logout')
      navigate('/')
    }
    call()

  }
  return (
    <div className="md:mx-14">
      {/* header */}
      <div className="flex justify-between px-3 py-4 items-center">
        <div>
          <h1 className="font-bold text-xl text-blue-700">To-Do</h1>
        </div>
        <div>
        <button onClick={handleLogout} className="px-5 py-2 rounded-lg bg-red-100 text-red-700 font-medium me-8">
            Logout
          </button>
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
