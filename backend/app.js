const express = require('express')
const connectdb = require("./connection")
const app = express()
const approuter = require('./routes/appRoute')
const cors = require('cors')
const session = require('express-session')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended : true,
   limit : '50mb'
}))
app.use(session({
   secret: 'your-secret-key', // Change this to a secret key for session encryption
   resave: false,
   saveUninitialized: false
}));
app.use('/',approuter)

connectdb()


app.listen(4000,() =>{
   console.log("server started at port 4000");
})