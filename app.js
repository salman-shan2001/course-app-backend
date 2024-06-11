const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const {coursemodel}= require("./models/course")  // imported the course model

mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")



const app = express()
app.use(cors())
app.use(express.json())


app.post("/add", (req, res) => {
    let input = req.body
    let course = new coursemodel(input)
    console.log(course)
    course.save()
    res.json({"status":"success"})
})

app.get("/view", (req, res) => {
   coursemodel.find().then(
    (data)=>{res.json(data)}
   ).catch(
    (error)=>{res.json(error)}
   )
})

app.listen(8055, () => {
    console.log("server started")
})
