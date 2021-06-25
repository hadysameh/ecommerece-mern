const router = require('express').Router()
const mongoose = require('mongoose')
const UsersController=require('./../controllers/UsersController')
// const isAuthMiddelware = require('./../middelware/isAuth')


router.post('/user/login',UsersController.login)
router.post('/user/register',UsersController.register)


module.exports=router
