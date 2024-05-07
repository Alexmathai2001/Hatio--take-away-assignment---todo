async function setupOctokit() {
  let Octokit;
  try {
      const { Octokit: OctokitModule } = await import('@octokit/core');
      Octokit = OctokitModule;
  } catch (error) {
      console.error('Error importing Octokit:', error);
      throw new Error('Failed to import Octokit');
  }
  return Octokit;
}

// Use setupOctokit function to set up Octokit
setupOctokit().then((Octokit) => {
  // Now you can use Octokit here or export it from this module
  module.exports.Octokit = Octokit;
});

const projectModel = require("../models/projectSchema");
require("dotenv").config()

module.exports = {
  postaddproject: (req, res) => {
    try {
      console.log(req.session.loginuser);

      const projectID = createProjectID();
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      const newProject = new projectModel({
        user: req.session.loginuser,
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
      console.log(req.session.loginuser + "hemme");
      const data = await projectModel.find({ user: req.params.userid });
      res.json(data);
    } catch (error) {}
  },
  savetodo: async (req, res) => {
    try {
      let { projectName, activeTasks, completedTasks, projectID } = req.body;
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
            const existingTaskIndex = project.todoList.findIndex(
              (existingTask) =>
                existingTask.taskName === task.taskName && !existingTask.status
            );

            if (existingTaskIndex !== -1) {
              // Update the status of the existing task to true
              project.todoList[existingTaskIndex].status = true;

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
      const data = await projectModel.find({ projectID: req.params.todoID });
      res.json(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getgist: async (req, res) => {
    // Inside getgist function, use the Octokit instance returned by setupOctokit
    const Octokit = await setupOctokit();

    console.log(req.params.projectid);
    const projectData = await projectModel.find({ projectID: req.params.projectid });
    console.log(projectData[0]?.todoList);

    const projectTitle = projectData[0]?.projectName;
    const todos = projectData[0]?.todoList;

    const markdownContent = generateProjectSummary(projectTitle, todos);
    console.log(markdownContent);
    const gistUrl = await createSecretGist(projectTitle + '.md', markdownContent);
    console.log("maria");
    console.log(gistUrl);
    res.json(gistUrl)
  }
};

async function createSecretGist(filename, content) {
  const octokit = new module.exports.Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN
  });

  try {
      const response = await octokit.request('POST /gists', {
          description: 'Example of a gist',
          public: false,
          files: {
              [filename]: {
                  content: content
              }
          },
          headers: {
              'X-GitHub-Api-Version': '2022-11-28'
          }
      });

      return response.data.html_url;
  } catch (error) {
      console.error('Error creating gist:', error.message);
      throw new Error('Failed to create gist');
  }
}

function createProjectID() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const result = `PROJ-${randomNumber}`;
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

function generateProjectSummary(projectTitle, todos) {
  // Calculate the number of completed and pending todos
  const completedTodos = todos.filter(todo => todo.status);
  const pendingTodos = todos.filter(todo => !todo.status);

  // Generate the Markdown content
  let markdown = `# ${projectTitle}\n\n`;
  markdown += `## Summary\n`;
  markdown += `* ${completedTodos.length} / ${todos.length} completed\n\n`;

  // Generate the section for pending todos
  markdown += `## Pending Todos\n`;
  markdown += generateTodoList(pendingTodos);

  // Generate the section for completed todos
  markdown += `## Completed Todos\n`;
  markdown += generateTodoList(completedTodos);

  return markdown;
}

function generateTodoList(todos) {
  let list = '';
  todos.forEach(todo => {
      list += `- [${todo.status ? 'x' : ' '}] ${todo.taskName}\n`;
  });
  return list;
}
