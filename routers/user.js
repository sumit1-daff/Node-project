const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
// router.use((req,res,next)=>{
//     console.log("hello",req.body);
//     next();
    
// })
router.get('/',userController.getUsers);
router.get('/:id',userController.getUserbyId);
router.post('/',userController.addUser);
router.put('/:id',userController.replaceUser);
router.patch('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;
