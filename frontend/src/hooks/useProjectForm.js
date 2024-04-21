import { useState } from "react";
import axios from "axios";

const useProjectForm = ({ data, isUpdated }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "projectName") {
      setProjectName(e.target.value);
    } else if (e.target.name === "projectDesc") {
      setProjectDesc(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/postaddproject", {
        projectName,
        projectDesc,
      });
      data(false);
      if (response.data.status === "success") {
        isUpdated("updated");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    projectName,
    projectDesc,
    handleChange,
    handleSubmit,
  };
};

export default useProjectForm;
