const mongoose=require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
    productName :{
        type:String,
        required:true
    },
    img :{
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true
    },
    discount :{
        type:Number,
        min: 0,
        max: 90,
        required:true
    },
    count:{
        type:Number,
        required:true,
        min:0
    },
    salesNumber:{
        type:Number,
        
        min:0
    },
    discription :{
        type:String,
        required:true
    },
    category:{
        type: schema.Types.ObjectId,
        ref: 'Category'
    }

},{
    timestamps:true
})

productSchema.index({discount:1})
productSchema.index({"createdAt": 1});
productSchema.index({category:1})
productSchema.index({salesNumber:1})

module.exports = Product = mongoose.model('Product',productSchema)