const Category=require('./../models/Category')
class CategoriesController{
    
    static async index(){
        let categories =await Category.find().exec()
        res.json(categories)
    }
    static async show(){
        let category = await Category.findOne({_id:req.query.product_id}).exec()
        res.send(category)
    }
    static async edit(){
        let category = await Category.updateOne({_id:req.body.id},{...req.body})
        res.json(category)
    }
    static async store(){
        let category = new Category({
            ...req.body
        })
        let saved_category = await category.save()
        res.json(saved_category)

    }
    static async delete(){
        const removedCategory = await Category.deleteOne({_id:req.body.id}).exec();
        res.json(removedCategory);
    }
}
module.exports=CategoriesController