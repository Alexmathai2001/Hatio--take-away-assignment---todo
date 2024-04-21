// useProjectForm.js
import { useState } from "react";
import axios from "axios";

const useProjectForm = (id) => {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "projectName") {
      setProjectName(e.target.value);
    } else if (e.target.name === "projectDesc") {
      setProjectDesc(e.target.value);
    }
  };

  const handleSave = () => {
    const data = {
      projectID: id,
      projectName: projectName,
      projectDesc: projectDesc,
    };

    axios
      .post("/savetodo", data)
      .then((response) => {
        console.log("Data successfully saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return { projectName, projectDesc, handleChange, handleSave };
};

export default useProjectForm;
