const router = require('express').Router()
const CategoriesController=require('./../controllers/CategoriesController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')

//changed to query
router.get('/category/',CategoriesController.index)
//changed to query
router.get('/category/show/',CategoriesController.show)
router.patch('/category/edit/',[isAuth,isAdmin],CategoriesController.edit)
router.post('/category/store',[isAuth,isAdmin],CategoriesController.store)
router.delete('/category/delete',[isAuth,isAdmin],CategoriesController.delete)


module.exports=router
