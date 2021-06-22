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
    discription :{
        type:String,
        required:true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }

},{
    timestamps:true
})

module.exports = Product = mongoose.model('Product',productSchema)