const express = require('express')
const connectdb = require("./connection")
const app = express()


app.use(express.urlencoded({
    extended : true,
   limit : '50mb'
}))

connectdb()


app.listen(4000,() =>{
   console.log("server started at port 4000");
})