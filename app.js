const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const {coursemodel}= require("./models/course")  // imported the coursemodel  object

mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")



const app = express()
app.use(cors())
app.use(express.json())


app.post("/add", (req, res) => {
    let input = req.body                         //input variable created
    let course = new coursemodel(input)          //couse object created in which input is given to course model
    console.log(course)                          //checked the course is working
    course.save()                                //saved the details to mongoose server
    res.json({"status":"success"})               //response if the data is successfully added
})

app.get("/view", (req, res) => {
   coursemodel.find().then(                         
    (data)=>{res.json(data)}                //it gives the data stored in the DB
   ).catch(
    (error)=>{res.json(error)}              //shows if a error occurs
   )
})

app.post("/search",(req,res)=>{
    let input=req.body                      //need to accept the title first
    coursemodel.find(input).then(
        (data)=>{res.json(data)}            // shows if the data exists
    ).catch(
        (error)=>{res.json(error)}
    )
})

app.listen(8055, () => {                  //to kmow the server update
    console.log("server started")
})
