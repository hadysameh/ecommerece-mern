const router = require('express').Router()
const CartController=require('./../controllers/CartController')
const isAuth=require('./../middelware/isAuth')

//changed to query
router.get('/cart/',[isAuth],CartController.index)

router.post('/cart/store',[isAuth],CartController.store)

router.delete('/cart/delete',[isAuth],CartController.delete)


module.exports=router
