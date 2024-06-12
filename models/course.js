const mongoose=require("mongoose")      //imported mongoose
const schema=mongoose.Schema(
    {
        "title":String,                    //created structure
        "description":String,
        "date":String,
        "duration":String,
        "venue":String,
        "trainerName":String

    }
)

const coursemodel=mongoose.model("courses",schema)     //the schemas are copied to coursemodel object 
module.exports={coursemodel}                           //exported the object