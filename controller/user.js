const model = require('../models/user');
const User = model.User;

exports.addUser = async (req,res)=>{  
    const user = new User({
      name : "sumit singh",
      id : 1,
      email : "sngsumit",
      phone : 1356654,
      address : "delhi",
      age : 21
    });
    await user.save();
    console.log("Added successfully");
    res.json(user);
}

const users = User.find();
exports.getUsers = async (req,res) =>{
    res.json(users);
}
exports.getUserbyId = async (req, res) =>{
    const id = +req.params.id;
    const user = User.find({id : id});
    res.json(user);
}

exports.replaceUser = async (req, res) =>{
    console.log('hiafoib');
    const id = +req.params.id;
    const users = User.find();
    const userIndex = users.findIndex(u => u.id===id);
    users.splice(userIndex,1,{...req.body, id:id})
    res.status(200).json(req.body);
}

exports.updateUser = async (req, res) =>{
    const id = +req.params.id;
    const users = User.find();

}


exports.deleteUser = async () =>{}

