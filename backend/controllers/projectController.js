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
  getprojects : async (req,res) =>{
    try {
        const data = await projectModel.find()
        res.json(data)
    } catch (error) {
        
    }
  },
  savetodo: async (req, res) => {
    try {
      const projectID = 'PROJ-3188';
      const { projectName, activeTasks, completedTasks } = req.body;
  
      // Find the project by ID
      const project = await projectModel.findOne({ projectID: projectID });
  
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      // Update project properties
      if (projectName) {
        project.projectName = projectName;
      }
      if (activeTasks) {
        activeTasks.forEach(task => {
          // Check if task already exists in todoList
          const existingTaskIndex = project.todoList.findIndex(existingTask => existingTask.taskName === task.text);
          if (existingTaskIndex === -1) {
            // Task not found, add new task
            project.todoList.push({
              taskName: task.text,
              taskTime: new Date(), // Assuming taskTime is the current time
              status: false // Assuming all new tasks are initially not completed
            });
          } else if (project.todoList[existingTaskIndex].status !== false) {
            // Task found and status changed, update status in database
            project.todoList[existingTaskIndex].status = false;
          }
        });
      }
  
      // Push new completed tasks to the todoList
      if (completedTasks) {
        completedTasks.forEach(task => {
          // Check if task already exists in todoList
          const existingTaskIndex = project.todoList.findIndex(existingTask => existingTask.taskName === task.text);
          if (existingTaskIndex === -1) {
            // Task not found, add new task
            project.todoList.push({
              taskName: task.text,
              taskTime: new Date(), // Assuming taskTime is the current time
              status: true // Assuming all new tasks are initially completed
            });
          } else if (project.todoList[existingTaskIndex].status !== true) {
            project.todoList[existingTaskIndex].status = true;
          }
        });
      }
  
      // Save the updated project
      await project.save();
  
      return res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
      console.error('Error saving todo:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  
  
};

function createProjectID() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const result = `PROJ-${randomNumber}`;
  console.log("entered ")
  return result;
}
function formatDate(date) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;
    
    return formattedDate;
  }