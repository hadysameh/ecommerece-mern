const router = require('express').Router()
const CategoriesController=require('./../controllers/CategoriesController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')

router.get('/category/',CategoriesController.index)
router.get('/category/show/',CategoriesController.show)
router.patch('/category/edit/',[isAuth,isAdmin],CategoriesController.edit)
router.post('/category/store',[isAuth,isAdmin],CategoriesController.store)
router.delete('/category/delete',[isAuth,isAdmin],CategoriesController.delete)


module.exports=router
