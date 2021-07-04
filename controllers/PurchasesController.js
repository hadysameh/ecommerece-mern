
const Purchase = require('../models/Purchase');
const Product=require('./../models/Product')
const stripe = require('stripe')(process.env.Secret_Key)
const {startSession} = require('mongoose')
class PurchasesController{
    static async index(req,res){

        let purchase = await Purchase.find().sort({_id:-1}).skip((req.body.page-1)*36).limit(36).exec()
        res.send({purchase})
    }
   
    static async store(req,res){
        const session = await startSession()
        // Moreover you can take more details from user
        // like Address, Name, etc from form
        try {

            stripe.customers.create({
                email: req.body.stripeEmail,
                source: req.body.stripeToken,
                name: 'Gourav Hammad',
                address: {
                    line1: 'TC 9/4 Old MES colony',
                    postal_code: '452331',
                    city: 'Indore',
                    state: 'Madhya Pradesh',
                    country: 'India',
                }
            })
            .then((customer) => {
        
                return stripe.charges.create({
                    amount: 2500,     // Charing Rs 25
                    description: 'Web Development Product',
                    currency: 'INR',
                    customer: customer.id
                });
            })
            .then(async (charge) => {
                console.log('charging succeddedS')
                let product = req.body.product
                let user =req.user
                let purchase =new Purchase({
                    product,
                    user
                })
                let saved_purchase

                session.startTransaction()

                Product.updateOne({_id:product._id},{$inc:{'count':-1,'salesNumber':1}})
                saved_purchase = await purchase.save()
                await session.commitTransaction()
                
                session.endSession()
    
                res.send({
                    saved_purchase,
                    transaction_status:success
                    
                })  // If no error occurs
            })
            .catch((err) => {
                res.send(err)       // If some error occurs
            });
            
        } catch (err) {
            await session.abortTransaction()
            session.endSession()
            console.log(err)
            res.send(err) 
        }
        
    
        
    }
    
}
module.exports=PurchasesController