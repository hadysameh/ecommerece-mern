const mongoose = require('mongoose')

const schema = mongoose.Schema

const cartschema = new schema({
    product:{
        type: schema.Types.Mixed,
        required:true
    },
    user:{
        type: schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},
{
    timestamps:true
})

module.exports = Cart = mongoose.model('Cart',cartschema)