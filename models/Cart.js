const mongoose = require('mongoose')

const schema = mongoose.schema

const cartschema = new schema({
    product:{
        type: Mixed,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},
{
    timestamps:true
})

module.exports = Cart = mongoose.model('Cart',cartschema)