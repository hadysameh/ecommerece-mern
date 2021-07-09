const router = require('express').Router()
const PurchasesController=require('./../controllers/PurchasesController')
const isAuth=require('./../middelware/isAuth')

//changed to query
router.get('/purchase/',PurchasesController.index)

router.post('/purchase/store',[isAuth],PurchasesController.store)


module.exports=router
