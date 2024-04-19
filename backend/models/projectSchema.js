const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    taskID : Number,
    taskName : String,
    taskTime : Date,
    status : Boolean
})

const projectSchema = new mongoose.Schema({
    user : String,
    projectID : String,
    projectName : String,
    projectDesc : String,
    createdDate : Date,
    updatedDate : Date,
    todoList : [todoSchema]

})

const projectModel = mongoose.model('project',projectSchema)

module.exports = projectModel