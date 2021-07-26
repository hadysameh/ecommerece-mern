const router = require('express').Router()
const PurchasesController=require('./../controllers/PurchasesController')
const isAuth=require('./../middelware/isAuth')
const bodyParser = require('express');
//changed to query
router.get('/purchase/',PurchasesController.index)

router.post('/purchase/store',[isAuth],PurchasesController.store)

// router.post('/purchase/create-checkout-session',[isAuth],PurchasesController.createCheckoutSession)

router.post('/purchase/create-checkout-session',PurchasesController.createCheckoutSession)

router.post('/purchase/webhook', bodyParser.raw({type: 'application/json'}) ,PurchasesController.fulfillStripePayment)

module.exports=router
