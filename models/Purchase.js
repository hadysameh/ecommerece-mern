const mongoose = require('mongoose')

const schema = mongoose.schema

const purchaseschema = new schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    users:{
        type: Array,
        required:true
    }
},
{
    timestamps:true
})

module.exports = Purchase = mongoose.model('Purchase',purchaseschema)