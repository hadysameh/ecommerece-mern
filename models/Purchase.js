const mongoose = require('mongoose')

const schema = mongoose.schema

const purchaseschema = new schema({
    product:{
        type: Mixed,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps:true
})

module.exports = Purchase = mongoose.model('Purchase',purchaseschema)