const mongoose = require("mongoose")

 
const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isInfluencer:{
        type:Boolean,
    },
    Rating:{
        type:Boolean,
    },
    Portfolio:{
        type:String,
    },
    Category:{
        type:String,
    },
    


}
)

module.exports = mongoose.model
("Users", user);

