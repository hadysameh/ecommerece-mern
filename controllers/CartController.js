const Cart  = require('./../models/Cart')
class CartController{
    static async index(){
        let cartProducts = await Cart.find().skip((req.query.page-1)*36).limit(36).exec()
        res.json(cartProducts)
    }    
    static async store(){
        let cartRecord = new Cart({
            product:req.body.product,
            user:req.user._id
        })

        let savedCartRecord = await cartRecord.save()
        res.json(savedCartRecord)

    }
    static async delete(){
        const removedCartRecord = await Cart.deleteOne({_id:req.body.id}).exec();
        res.json(removedCartRecord);
    }
}
module.exports=CartController