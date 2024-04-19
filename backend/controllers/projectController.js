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