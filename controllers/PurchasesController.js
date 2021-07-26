
const Purchase = require('../models/Purchase');
const Product=require('./../models/Product')
const stripe = require('stripe')(process.env.Secret_Key)
const {startSession} = require('mongoose')
const endpointSecret = 'whsec_76DKDuv5TQFfmigLTiZ6rGl5ywn58G0W'

class PurchasesController{
    static async index(req,res){

        let purchase = await Purchase.find().sort({_id:-1}).skip((req.query.page-1)*36).limit(36).exec()
        res.send({purchase})
    }
   
    static async store(req,res){
        const session = await startSession()
        // Moreover you can take more details from user
        // like Address, Name, etc from form
        try {

            

            let saved_purchase

                session.startTransaction()

                Product.updateOne({_id:product._id},{$inc:{'count':-1,'salesNumber':1}})
                saved_purchase = await purchase.save()
                await session.commitTransaction()
                
                session.endSession()
    
                res.send({
                    saved_purchase,
                    transaction_status:success
                    
                })
            
        } catch (err) {
            await session.abortTransaction()
            session.endSession()
            console.log(err)
            res.send(err) 
        }
                
    }
    

    static async createCheckoutSession(req, res)  {
        
        // console.log(req.body.cartData[0].user)
        let cartData = JSON.parse(req.body.cartData)
        // console.log(cartData[0].product)
        let metaCartData = cartData.map(cartItem=>{
            return {
                cart_id:cartItem._id,
                user_id:cartItem.user,
                product_id:cartItem.product._id
            }
        })
        let line_items=cartData.map(cartItem=>
           { return {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: cartItem.product.productName,
                    // images: ['https://i.imgur.com/EHyR2nP.png'],
                  },
                  unit_amount: cartItem.product.price*100,
                },
                quantity: 1,
              }
            }            
        )
        // console.log(line_items)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: `${process.env.domian}/`,
            cancel_url: `${process.env.domian}/cart`,
            metadata:{
                "test":'test',
                "cartData":JSON.stringify(metaCartData)
            }
          });
          res.redirect(303, session.url)
    }


    static async fulfillStripePayment(req, res)  {
        const payload = req.body;
        // console.log(req)
        console.log(['payload',payload])

        const sig = req.headers['stripe-signature'];
        // console.log(sig)
        let event;

        try {
            // console.log('trying event')
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
          } catch (err) {
              console.log(err)
            return res.status(400).send(`Webhook Error: ${err.message}`);
          }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            console.log("Fulfilling order", session);
        }
        else{
            console.log('checkout.session not completed');
        }            
        switch (event.type) {
            case 'checkout.session.completed': {
            const session = event.data.object;
            console.log(['checkout.session.completed',session])
            // createOrder(session);

            if (session.payment_status === 'paid') {
                console.log('paid')
                console.log(['checkout.session.completed',session.object])
            }

            break;
            }

            case 'checkout.session.async_payment_succeeded': {
            const session = event.data.object;

            // fulfillOrder(session);

            break;
            }

            case 'checkout.session.async_payment_failed': {
            const session = event.data.object;

            // Send an email to the customer asking them to retry their order
            emailCustomerAboutFailedPayment(session);

            break;
            }
        }


      
        res.status(200);
    }
    
}
module.exports=PurchasesController

// [
//     {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Stubborn Attachments',
//             images: ['https://i.imgur.com/EHyR2nP.png'],
//           },
//           unit_amount: 2000,
//         },
//         quantity: 2,
//       },
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Stubborn Attachments',
//             images: ['https://i.imgur.com/EHyR2nP.png'],
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
// ]