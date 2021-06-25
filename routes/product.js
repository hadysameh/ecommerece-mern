const router = require('express').Router()
const ProductsController=require('./../controllers/ProductsController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')
const upload = require('./../middelware/upload')



router.get('/product/',isAuth,ProductsController.index)
router.get('/product/show/',ProductsController.show)
router.patch('/product/edit/',[isAuth,isAdmin],ProductsController.edit)
router.post('/product/',[isAuth,isAdmin], upload.single('img'),ProductsController.store)
router.delete('/product/',[isAuth,isAdmin],ProductsController.delete)


module.exports=router
