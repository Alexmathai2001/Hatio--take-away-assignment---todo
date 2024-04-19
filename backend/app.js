const express = require('express')
const connectdb = require("./connection")
const app = express()
const approuter = require('./routes/appRoute')
const bodyparser = require('body-parser')

app.use(express.urlencoded({
    extended : true,
   limit : '50mb'
}))
app.use('/',approuter)
connectdb()


app.listen(4000,() =>{
   console.log("server started at port 4000");
})