const Product=require('./../models/Product')
// const Category=require('./../models/Category')
class ProductsController{
    //index works fine
    static async index(req,res){
        if(req.body.category_id){
            // console.log(['category condition',req.body.category_id])
            //will start with page 1
            let products = await Product.find({_id:req.body.category_id}).skip((req.body.page-1)*36).limit(36).exec()

            res.send({products})
        }
        else if(req.body.product_search){
            if(product_search=='newst'){
                // console.log('newst condition')
                //will start with page 1
                let products = await Product.find().sort({_id:-1}).skip((req.body.page-1)*36).limit(36).exec()
                res.send({products})
            }
            else if(req.body.product_search=='discounts'){
                // console.log('discounts condition')
                let products = await Product.find({discount:{$gt:0}}).sort({_id:-1}).skip((req.body.page-1)*36).limit(36).exec()
                res.send({products})
            }

            else if(req.body.product_search=='bestseller'){
                // console.log('bestseller condition')
                //-1 will sort them in descending order
                let products = await Product.find().sort({salesNumber:-1}).skip((req.body.page-1)*36).limit(36).exec()
                res.send({products})
            }
        }
        else{
            let products = await Product.find().exec()
            // console.log('no condition')
            res.send({products})
        }
    }
    //show works fine
    static async show(req,res){
        let product = await Product.findOne({_id:req.body.product_id}).exec()
        res.send(product)
    }
    //edit works fine
    static async edit(req,res){
        let edited_product
        if(req.file){
            let img=req.file.path
            edited_product={
                ...req.body,
                img
            }
        }
        else{
            edited_product={
                ...req.body
            }
        }
        let product = await Product.updateOne({_id:req.body.id},edited_product)
        res.json(product)
    }
    //store works fine
    static async store(req,res){
        // console.log(req.body)
        let product_img = req.file.path;
        let product = new Product({...req.body,img:product_img})
        let saved_product = await product.save()
        res.json(saved_product)
    }
    static async delete(req,res){
        const removedProduct = await Product.deleteOne({_id:req.body.id}).exec();
        res.json(removedProduct);
    }
}
module.exports=ProductsController