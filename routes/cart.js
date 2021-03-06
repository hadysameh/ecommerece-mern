const router = require('express').Router()
const CartController=require('./../controllers/CartController')
const isAuth=require('./../middelware/isAuth')

router.get('/cart/',CartController.index)

router.post('/cart/store',[isAuth],CartController.store)

router.delete('/cart/delete',[isAuth],CartController.delete)


module.exports=router
