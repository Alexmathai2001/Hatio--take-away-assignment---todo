const projectModel = require("../models/projectSchema");

module.exports = {
  postaddproject: (req, res) => {
    try {
      console.log(req.body);

      const projectID = createProjectID();
      console.log("heeeee");
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      console.log("ehllo");
      const newProject = new projectModel({
        user: "Alex",
        projectID: projectID,
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
        createdDate: formattedDate,
        updatedDate: formattedDate,
      });
      newProject.save();
      res.json({
        status: "success",
      });
    } catch (error) {}
  },
  getprojects: async (req, res) => {
    try {
      const data = await projectModel.find();
      res.json(data);
    } catch (error) {}
  },
  savetodo: async (req, res) => {
    try {
      let { projectName, activeTasks, completedTasks ,projectID} = req.body;
      console.log(req.body);

      // Find the project by ID
      const project = await projectModel.findOne({ projectID: projectID });

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      // Update project properties if projectName is provided
      if (projectName) {
        project.projectName = projectName;
      }

      // Update or add active tasks
      if (activeTasks) {
        activeTasks.forEach((task) => {
          if (task.taskName) {
            // Find the index of the task in the project's todoList
            const existingTaskIndex = project.todoList.findIndex(
              (existingTask) => existingTask.taskName === task.taskName
            );

            if (existingTaskIndex === -1) {
              // Task does not exist, add it
              project.todoList.push({
                taskName: task.taskName,
                taskTime: new Date(), // Assuming taskTime is the current time
                status: false, // Assuming all new tasks are initially not completed
              });
            } else {
              // Task exists, update its status if needed
              if (!project.todoList[existingTaskIndex].status) {
                project.todoList[existingTaskIndex].status = false;
              }
            }
          }
        });
      }

      // Update completed tasks and remove them from active tasks
      if (completedTasks) {
        completedTasks.forEach((task) => {
          if (task.taskName) {
            console.log("yes");
            const existingTaskIndex = project.todoList.findIndex(
              (existingTask) =>
                existingTask.taskName === task.taskName && !existingTask.status
            );

            if (existingTaskIndex !== -1) {
              // Update the status of the existing task to true
              project.todoList[existingTaskIndex].status = true;
              console.log(`Task "${task.taskName}" status updated to true.`);

              // Remove the task from the activeTasks array
              activeTasks = activeTasks.filter(
                (activeTask) => activeTask.taskName !== task.taskName
              );
            } else {
              // Task with the same name and status false not found, do nothing
              console.log(
                `Task "${task.taskName}" not found with status false.`
              );
            }
          }
        });
      }

      // Save the updated project
      await project.save();

      return res.status(200).json({ message: "Project updated successfully" });
    } catch (error) {
      console.error("Error saving todo:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  getTodoData: async (req, res) => {
    try {
      console.log(req.params.todoID)
      const data = await projectModel.find({ projectID: req.params.todoID });
      res.json(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

function createProjectID() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const result = `PROJ-${randomNumber}`;
  console.log("entered ");
  return result;
}
function formatDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;

  return formattedDate;
}
