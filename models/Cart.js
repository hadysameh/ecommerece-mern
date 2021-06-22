const mongoose = require('mongoose')

const schema = mongoose.schema

const cartschema = new schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps:true
})

module.exports = Cart = mongoose.model('Cart',cartschema)