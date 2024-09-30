const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    id : {type :  String, required : true},
    name : {type:String},
    email : {type : String},
    phone : {type : Number},
    address : {type: String},
    age : {type : Number}
});

exports.User = mongoose.model("User", userSchema);