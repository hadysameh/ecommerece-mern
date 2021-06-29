
const Purchase = require('../models/Purchase');
const Product=require('./../models/Product')
const stripe = require('stripe')(process.env.Secret_Key)

class PurchasesController{
    static index(){

        let purchase = await Purchase.find().sort({_id:-1}).skip((req.body.page-1)*36).limit(36).exec()
        res.send({purchase})
    }
   
    static async store(){
        // Moreover you can take more details from user
        // like Address, Name, etc from form
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
        .then((charge) => {
            let product = req.body.product
            let user =req.user
            let purchase =new Purchase({
                product,
                user
            })
            Product.updateOne({_id:product._id},{$inc:{'count':-1,'salesNumber':1}})
            let saved_purchase = await purchase.save()

            res.send({
                saved_purchase,
                transaction_status:success
                
            })  // If no error occurs
        })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });
    
        
    }
    
}
module.exports=PurchasesController