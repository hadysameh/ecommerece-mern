const Category=require('./../models/Category')
const Product=require('./../models/Product')
// const Category=require('./../models/Category')
class ProductsController{
    static async index(req,res){
        if(req.body.category!==null){
            //will start with page 1
            let products = await Product.find({_id:req.body.category_id}).skip((req.body.page-1)*36).limit(36).exec()

            res.send({products})
        }
        else if(req.body.product_search!==null){
            if(product_search=='newst'){
                //will start with page 1
                let products = await Product.find().sort({_id:-1}).skip((req.body.page-1)*36).limit(36).exec()
                res.send({products})
            }
            else if(req.body.product_search=='discounts'){

                let products = await Product.find({discount:{$gt:0}}).sort({_id:-1}).skip((req.body.page-1)*36).limit(36).exec()
                res.send({products})
            }

            else if(req.body.product_search=='bestseller'){
                //-1 will sort them in descending order
                let products = await Product.find().sort({salesNumber:-1}).skip((req.body.page-1)*36).limit(36).exec()
                res.send({products})
            }
        }
    }
    static async show(req,res){
        let product = await Product.findOne({_id:req.body.product_id}).exec()
        res.send(product)
    }
    static async edit(req,res){
        let product = awaitProduct.updateOne({_id:req.body.id},{...req.body.product})
        res.json(product)
    }
    static async store(req,res){
        console.log(req.body)
        let product_img = req.file.path;
        let product = new Product({...req.body,img:product_img})
        let saved_product = await product.save()
        res.json(saved_product)

    }
    static async delete(req,res){
        const removedProduct = await Product.deleteOne({_id:req.params.id});
          res.json(removedProduct);
    }
}

module.exports=ProductsController